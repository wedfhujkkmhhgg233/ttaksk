const express = require('express');
const { spotify } = require('betabotz-tools');

const app = express();
const port = 3000;

app.get('/spotify', async (req, res) => {
    const query = req.query.q; // Extract the query parameter from the URL
    
    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    try {
        const results = await spotify(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while searching' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
