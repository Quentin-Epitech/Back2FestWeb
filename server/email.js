require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(express.json());
app.use(cors());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-confirmation', async (req, res) => {
  const { to, name } = req.body;
  if (!to) return res.status(400).json({ error: 'Email requis' });

  try {
    await resend.emails.send({
      from: 'Back2Fest <onboarding@resend.dev>',
      to: [to],
      subject: 'Merci pour votre commande !',
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px;">
          <h2 style="color:#2962ff;">Merci ${name || ''} pour votre commande !</h2>
          <p>Votre commande a bien été enregistrée.<br>
          Nous avons hâte de vous retrouver au festival 🎉</p>
          <p style="margin-top:32px;">L'équipe Back2Fest</p>
        </div>
      `,
    });
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = 3005;
app.listen(PORT, () => console.log('Serveur email Resend lancé sur le port', PORT));