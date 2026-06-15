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
      děkuji za vyplnění kalkulačky životního pojištění. Níže najdete orientační výsledky Vaší kalkulace.
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
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Telefon:</strong> ${payload.telefon || '(neuvedeno)'}</p>
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 20px;"><strong>Orientační cena:</strong> <span style="color:#b8952e;font-weight:700;">${payload.cena_mesicne || ''}</span></p>
    ${payload.nastaveni || ''}
    ${payload.scenare || ''}
  </div>
  ${footer}
</div>
</body>
</html>`;
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
        subject: 'Vaše kalkulace životního pojištění – Finanční Frajer',
        html: buildEmailHtml(payload, true)
      })
    }) : Promise.resolve();

    await Promise.all([toMe, toClient]);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
