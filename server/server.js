const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());

mongoose.connect('mongodb://localhost/testdb');

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    title: String,
    date: String,
    content: String
});

const Comments = mongoose.model('Comments', commentSchema);

const comment = new Comments({
    title: 'title text',
    date: '12.12',
    content: 'comment text'
});

comment.save(function (err) {
    if (err) return console.error(err);
    console.log('comment saved');
});

app.get('/api/comments', (req, res) => {
    Comments.find(function(err, Comments) {
        res.json(Comments)
    })
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
