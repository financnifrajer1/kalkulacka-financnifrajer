const RESEND_API_KEY = 're_FvcsFhQ5_GsrEGu97v9PcchL3TabaspCZ';
const LOGO_B64 = 'data:image/png;base64,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';

function buildEmailHtml(payload, forClient) {
  const header = `
    <div style="background:#ffffff;padding:20px 28px;text-align:center;border-bottom:1px solid #e0d5c0;">
      <img src="${LOGO_B64}" alt="Finanční Frajer" style="height:50px;width:auto;" />
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
