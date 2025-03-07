import express from 'express';
import axios from "axios";
import querystring from "querystring";

var router = express.Router();

router.get('/authorize', (req, res) => {
    const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?${querystring.stringify({
        scope: 'https://www.googleapis.com/auth/contacts.readonly',
        access_type: 'offline',
        include_granted_scopes: true,
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
    })}`;

    res.redirect(authorizationUrl);
});

router.get('/', async (req, res) => {
    const { code } = req.query;

    if (code) {
        try {
            const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', querystring.stringify({
                code,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                redirect_uri: process.env.REDIRECT_URI,
                grant_type: 'authorization_code'
            }));

            const { access_token, refresh_token } = tokenResponse.data;

            const contactsResponse = await axios.get('https://people.googleapis.com/v1/people/me/connections', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
                params: {
                    personFields: 'names,emailAddresses',
                },
            });

            res.json(contactsResponse.data);

        } catch (error) {
            res.status(500).send('Error exchanging token or fetching contacts');
        }
    } else {
        res.status(400).send('Authorization code missing');
    };
});

export { router };