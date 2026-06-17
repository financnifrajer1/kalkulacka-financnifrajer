const RESEND_API_KEY = 're_FvcsFhQ5_GsrEGu97v9PcchL3TabaspCZ';
const LOGO_URL = 'https://acb46d35f8.clvaw-cdnwnd.com/2a57a5a1d724810f65fe543ea56e21b3/200000078-0a8450a847/Bez%20n%C3%A1zvu%20%28200%20x%2060%20px%29%20%285%29.png?ph=acb46d35f8';

function buildEmailHtml(payload, forClient) {
  const header = `
    <div style="background:#ffffff;padding:20px 28px;text-align:center;border-bottom:1px solid #e0d5c0;">
      <img src="${LOGO_URL}" alt="Finanční Frajer" style="height:50px;width:auto;" />
    </div>`;

  const intro = forClient ? `
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 16px;">
      Dobrý den, <strong>${payload.jmeno || ''}</strong>,<br><br>
      děkuji za vyplnění kalkulačky rodinného pojištění. Níže najdete orientační výsledky Vaší kalkulace.
      Rád se s Vámi spojím a probereme podrobnosti osobně.
    </p>` : '';

  const footer = forClient ? `
    <div style="background:#f7f5f0;padding:16px 28px;border-top:1px solid #e0d5c0;">
      <p style="color:#1a1a1a;font-size:13px;margin:0 0 4px;"><strong>Daniel Ševčík</strong> – Finanční Frajer</p>
      <p style="color:#888;font-size:12px;margin:0;">📞 731 980 199 | 🌐 financnifrajer.cz</p>
      <p style="color:#aaa;font-size:11px;margin:8px 0 0;">Tato kalkulace má orientační charakter. Skutečná cena závisí na zdravotním stavu a výběru pojišťovny.</p>
    </div>` : `
    <div style="background:#f7f5f0;padding:16px 28px;border-top:1px solid #e0d5c0;">
      <p style="color:#888;font-size:12px;margin:0;">Tato kalkulace má orientační charakter. Skutečná cena závisí na zdravotním stavu a výběru pojišťovny.</p>
    </div>`;

  return `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:20px;margin:0;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e0d5c0;">
  ${header}
  <div style="padding:24px 28px;">
    ${intro}
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Jméno:</strong> ${payload.jmeno || ''}</p>
    ${payload.ucel ? `<p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Záměr pojištění:</strong> ${payload.ucel}</p>` : ''}
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Telefon:</strong> ${payload.telefon || '(neuvedeno)'}</p>
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Email:</strong> ${payload.reply_to || '(neuvedeno)'}</p>
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 20px;"><strong>Orientační cena:</strong> <span style="color:#b8952e;font-weight:700;">${payload.cena_mesicne || ''}</span></p>
    ${payload.odpovedi ? `
    <div style="background:#f7f5f0;border-radius:8px;padding:12px 16px;margin:0 0 20px;">
      <p style="font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.07em;margin:0 0 8px;">Odpovědi na otázky</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">🎯 Záměr</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.vek ? payload.ucel : ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">👤 Věk</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.vek || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">💵 Příjem</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.prijem || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">💼 Zaměstnání</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.zamestnani || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">🔧 Typ práce</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.prace || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">🏦 Úvěr</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.uver || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">💰 Rezervy</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.rezervy || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">👨‍👩‍👧 Děti</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.deti || ''}</td></tr>
        <tr style="border-bottom:1px solid #e0d8cc;"><td style="padding:4px 0;color:#666;">👫 Partner</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.partner || ''}</td></tr>
        <tr><td style="padding:4px 0;color:#666;">❤️ Zdraví</td><td style="padding:4px 0;text-align:right;color:#1a1a1a;">${payload.odpovedi.zdravi || ''}</td></tr>
      </table>
    </div>` : ''}
    ${payload.nastaveni || ''}
    ${payload.scenare || ''}
  </div>
  ${footer}
</div>
</body>
</html>`;
}

function buildWhatsAppMessage(payload) {
  const ucel = payload.ucel ? `\nZáměr: ${payload.ucel}` : '';
  return `Dobrý den, jmenuji se ${payload.jmeno || '(neuvedeno)'} a mám zájem o konzultaci rodinného pojištění.

📊 Kalkulace rodinného pojištění – Finanční Frajer
👤 Jméno: ${payload.jmeno || '(neuvedeno)'}
📞 Telefon: ${payload.telefon || '(neuvedeno)'}${ucel}
💰 Orientační cena: ${payload.cena_mesicne || ''}

Prosím o kontakt. Děkuji!`;
}

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body);

    // Email tobě
    const toMe = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Finanční Frajer <kalkulacka@financnifrajer.cz>',
        to: ['daniel@financnifrajer.cz'],
        reply_to: payload.reply_to,
        subject: payload.subject,
        html: buildEmailHtml(payload, false)
      })
    });

    // Email klientovi
    const toClient = payload.reply_to ? fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Daniel Ševčík – Finanční Frajer <kalkulacka@financnifrajer.cz>',
        to: [payload.reply_to],
        subject: 'Vaše kalkulace rodinného pojištění – Finanční Frajer',
        html: buildEmailHtml(payload, true)
      })
    }) : Promise.resolve();

    await Promise.all([toMe, toClient]);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ ok: true, whatsapp_message: buildWhatsAppMessage(payload) })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
