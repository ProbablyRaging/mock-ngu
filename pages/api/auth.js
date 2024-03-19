import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = process.env.API_KEY;
    const route = req.body.route;

    if (req.headers.origin && route) {
        const toRoute = req.headers.origin + '/api/' + route;

        try {
            const response = await axios.post(toRoute, null, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });
            res.status(200).json(response.data);
        } catch (error) {
            if (error.response) {
                res.status(error.response.status).json({ error: error.response.data });
            } else {
                res.status(500).json({ error: 'An error occurred' });
            }
        }
    } else {
        res.status(403).json({ error: 'Unauthorized' });
    }
}