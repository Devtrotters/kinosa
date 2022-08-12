async function addToList(mail, transmit) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let request = require('request');

    let listIds = transmit ? [4] : [3];

    const options = {
        method: 'POST',
        url: 'https://api.sendinblue.com/v3/contacts',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': process.env.MAILER_API
        },
        body: {
            listIds: listIds,
            updateEnabled: false,
            email: mail
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) {
            console.log(error);
        }
    });
}

export default async (req, res) => {
    let data = req.body;
    try {
        // eslint-disable-next-line prettier/prettier
        await addToList(data.input.email, data.input.transmit);
        return res.status(200).json({
            text: 'Ajouté !'
        });
    } catch (error) {
        return res.json({ text: 'Erreur' });
    }
};
