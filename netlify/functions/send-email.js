exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const RESEND_API_KEY = 're_FvcsFhQ5_GsrEGu97v9PcchL3TabaspCZ';

  try {
    const payload = JSON.parse(event.body);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Finanční Frajer <kalkulacka@financnifrajer.cz>',
        to: ['daniel@financnifrajer.cz'],
        reply_to: payload.reply_to,
        subject: payload.subject,
        html: payload.html
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
