const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/comments', (req, res) => {
    res.json([
        {
            title: 'sanya',
            date: '26.11',
            content: 'sanyok kovladislavskiy'
        },
        {
            title: 'vova',
            date: '16.12',
            content: 'vovanich vladislistever'
        },
        {
            title: 'katya',
            date: '36.13',
            content: 'katrya sobachinlo'
        }
    ]);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
