require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const QRCode = require('qrcode');

const app = express();
app.use(express.json());
app.use(cors());

// Initialisation de l'API Resend avec la clé stockée dans .env
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-confirmation', async (req, res) => {
  try {
    const { to, name, tickets } = req.body;

    if (!to || !Array.isArray(tickets) || tickets.length === 0) {
      return res.status(400).json({ error: 'Données manquantes ou invalides' });
    }

    // Génération de tous les QR codes en parallèle
    const qrHtmlBlocks = await Promise.all(
      tickets.map(async (ticket) => {
        if (typeof ticket.code !== 'string') {
          throw new Error('Code de ticket invalide');
        }

        const qrDataUrl = await QRCode.toDataURL(ticket.code);
        return `
          <div style="margin-bottom:24px;">
            <img src="${qrDataUrl}" alt="QR Code" style="width:120px;height:120px;" />
            <div style="font-family:monospace;font-size:12px;">${ticket.code}</div>
          </div>
        `;
      })
    );

    const qrHtml = `
      <h3>Voici vos billets électroniques :</h3>
      ${qrHtmlBlocks.join('')}
    `;

    // Envoi de l’email
    await resend.emails.send({
      from: 'Back2Fest <onboarding@resend.dev>',
      to: [to],
      subject: 'Merci pour votre commande !',
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px;">
          <h2 style="color:#2962ff;">Merci ${name || ''} pour votre commande !</h2>
          <p>Votre commande a bien été enregistrée.<br>
          Nous avons hâte de vous retrouver au festival 🎉</p>
          ${qrHtml}
          <p style="margin-top:32px;">L'équipe Back2Fest</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
