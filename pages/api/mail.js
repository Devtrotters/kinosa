import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';

export default (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const msg = {
        to: `Site Web <${process.env.MAIL_USER}>`, // Change to your recipient
        from: `Site Web <${process.env.MAIL_USER}>`, // Change to your verified sender
        replyTo: req.body.email,
        subject: `Message de ${req.body.name} depuis le site web`,
        text: `
        - Nom : ${req.body.name}
        - Mail : ${req.body.email}
        - Téléphone : ${req.body.tel || 'Non renseigné'}
        - Type de client : ${req.body.clientType || 'Non renseigné'}
        - Question : ${req.body.question || 'Non renseigné'}
        `,
        html: `
        <div>
        <p>Nom : ${req.body.name}</p>
        <p>Mail : ${req.body.email}</p>
        <p>Téléphone : ${req.body.tel || 'Non renseigné'}</p>
        <p>Type de client : ${req.body.clientType || 'Non renseigné'}</p>
        <p>Question : ${req.body.question || 'Non renseigné'}</p>
        </div>`
    };

    try {
        transporter.sendMail(msg);
        res.json({ text: 'Email sent' });
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
};
