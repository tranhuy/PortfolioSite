import { SMTPClient } from 'emailjs';


const handler = async (req, res) => {
    const { name, email, phone, message } = JSON.parse(req.body);
    
    const client = new SMTPClient({
        user: process.env.EMAIL_ADDRESS,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.EMAIL_HOST,
        tls: {
            ciphers: 'SSLv3',
        }
    });

    const emailToSend = {
        text: `Email: ${email}\n\nPhone: ${phone}\n\nMessage:\n${message}`,
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `Received email from ${name}`,
    };

    try {
        await client.sendAsync(emailToSend);
        res.status(200).end('Mail sent successfully');
    } catch (err) {
        res.status(500).end('Mail delivery failture. Issue has been logged. Please try again later.');
    }    
}

export default handler;