const mongoose = require('mongoose');

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
