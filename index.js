const express = require('express');
const { spotify } = require('nayan-server');

const app = express();
const port = 3000;

app.get('/search', async (req, res) => {
    const songName = req.query.name; // Extract the song name from the query parameter

    if (!songName) {
        return res.status(400).json({ error: 'Query parameter "name" is required' });
    }

    try {
        const data = await spotify(songName);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while searching for the song' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
