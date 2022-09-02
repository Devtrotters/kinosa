// import sgMail from '@sendgrid/mail';
// import nodemailer from 'nodemailer';
// import { ApiClient, SendSmtpEmail, TransactionalEmailsApi } from 'sib-api-v3-sdk';

import axios from 'axios';

export default async (req, res) => {
    // const msg = {
    //     to: `Site Web <${process.env.MAIL_USER}>`, // Change to your recipient
    //     sender: `Site Web <${process.env.MAIL_USER}>`, // Change to your verified sender
    //     replyTo: { name: req.body.name, email: req.body.email },
    //     subject: `Message de ${req.body.name} depuis le site web`,
    //     textContent: `
    //     - Nom : ${req.body.name}
    //     - Mail : ${req.body.email}
    //     - Téléphone : ${req.body.tel || 'Non renseigné'}
    //     - Type de client : ${req.body.clientType || 'Non renseigné'}
    //     - Question : ${req.body.question || 'Non renseigné'}
    //     `,
    //     htmlContent: `
    //     <div>
    //     <p>Nom : ${req.body.name}</p>
    //     <p>Mail : ${req.body.email}</p>
    //     <p>Téléphone : ${req.body.tel || 'Non renseigné'}</p>
    //     <p>Type de client : ${req.body.clientType || 'Non renseigné'}</p>
    //     <p>Question : ${req.body.question || 'Non renseigné'}</p>
    //     </div>`
    // };

    await axios
        .post(
            'https://api.sendinblue.com/v3/smtp/email',
            {
                sender: {
                    name: req.body.name,
                    email: req.body.email
                },
                to: [
                    {
                        email: 'enzo.viry@gmail.com',
                        name: 'Site Web'
                    }
                ],
                // replyTo: {
                //     name: req.body.name,
                //     email: req.body.email
                // },
                subject: `Message de ${req.body.name} depuis le site web`,
                htmlContent: `
        <div>
        <p>Nom : ${req.body.name}</p>
        <p>Mail : ${req.body.email}</p>
        <p>Téléphone : ${req.body.tel || 'Non renseigné'}</p>
        <p>Type de client : ${req.body.clientType || 'Non renseigné'}</p>
        <p>Question : ${req.body.question || 'Non renseigné'}</p>
        </div>`
            },
            {
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json',
                    'api-key': process.env.MAILER_API
                }
            }
        )
        .then((response) => {
            res.json({ text: 'Email sent' });
        })
        .catch((error) => {
            console.log(error);
        });
    // transporter.sendMail(msg);
    // apiInstance.sendTransacEmail(sendSmtpEmail);
};
