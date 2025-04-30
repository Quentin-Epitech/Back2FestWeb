require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const QRCode = require('qrcode');

const app = express();
app.use(express.json());
app.use(cors());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-confirmation', async (req, res) => {
  const { to, name, tickets } = req.body;
  if (!to) return res.status(400).json({ error: 'Email requis' });

  try {
    let qrHtml = '';
    if (tickets && tickets.length > 0) {
      qrHtml = '<h3>Voici vos billets électroniques :</h3>';
      for (const ticket of tickets) {
        const qrDataUrl = await QRCode.toDataURL(ticket.code);
        qrHtml += `
          <div style="margin-bottom:24px;">
            <img src="${qrDataUrl}" alt="QR Code" style="width:120px;height:120px;" />
            <div style="font-family:monospace;font-size:12px;">${ticket.code}</div>
          </div>
        `;
      }
    }

    const { data, error } = await resend.emails.send({
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

    if (error) {
      console.error('Erreur lors de l’envoi avec Resend:', error);
      return res.status(500).json({ error: error.message });
    }

    console.log('Email envoyé avec succès à', to);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erreur interne :', err);
    res.status(500).json({ error: err.message || 'Erreur interne serveur' });
  }
});

const PORT = 3005;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur http://localhost:${PORT}`));
