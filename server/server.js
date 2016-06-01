const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors());

app.get('/api/comments', (req, res) => {
    db.find(function(err, db) {
        res.json(db)
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
