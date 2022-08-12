// import sgMail from '@sendgrid/mail';
// import nodemailer from 'nodemailer';
// import { ApiClient, SendSmtpEmail, TransactionalEmailsApi } from 'sib-api-v3-sdk';

import axios from 'axios';

export default (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var SibApiV3Sdk = require('sib-api-v3-sdk');
    var defaultClient = SibApiV3Sdk.ApiClient.instance;

    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.MAILER_API;

    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail = {
        to: [{ name: 'Site Web', email: process.env.MAIL_USER }],
        replyTo: { name: req.body.name, email: req.body.email },
        templateId: 2,
        params: {
            name: req.body.name,
            mail: req.body.email,
            phone: req.body.tel || 'Non renseigné',
            client: req.body.clientType || 'Non renseigné',
            message: req.body.question || 'Non renseigné'
        },
        // textContent: `
        // - Nom : ${req.body.name}
        // - Mail : ${req.body.email}
        // - Téléphone : ${req.body.tel || 'Non renseigné'}
        // - Type de client : ${req.body.clientType || 'Non renseigné'}
        // - Question : ${req.body.question || 'Non renseigné'}
        // `,
        // htmlContent: `
        // <div>
        // <p>Nom : ${req.body.name}</p>
        // <p>Mail : ${req.body.email}</p>
        // <p>Téléphone : ${req.body.tel || 'Non renseigné'}</p>
        // <p>Type de client : ${req.body.clientType || 'Non renseigné'}</p>
        // <p>Question : ${req.body.question || 'Non renseigné'}</p>
        // </div>`
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': process.env.MAILER_API
        }
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
            res.json({ text: 'Email sent' });
        },
        function (error) {
            console.log(error);
            res.json({ error });
        }
    );
};
