import mailgunLoader from 'mailgun-js';
let mailgun = mailgunLoader({ apiKey:process.env.MAILGUN_API_KEY, domain: 'sandboxbc2a8220421648b3bc7044e84d51c5fb.mailgun.org' });

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data);
}

export { sendEmail };