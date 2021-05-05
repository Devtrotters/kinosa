async function addToList(mail) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let request = require('request');

    const options = {
        method: 'POST',
        url: 'https://api.sendinblue.com/v3/contacts',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key':
                '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'
        },
        body: {
            listIds: [3],
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
        await addToList(data.input.email);
        console.log(res.status);
        return res.status(200).json({
            text: 'Ajouté !'
        });
    } catch (error) {
        return res.json({ text: 'Erreur' });
    }
};
