const { Resend } = require('resend');
const QRCode = require('qrcode');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function(event, context) {
  // Vérifier la méthode HTTP
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const { to, name, tickets } = JSON.parse(event.body);
    
    if (!to) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email requis' })
      };
    }

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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 