const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    Name:String,
    Image:String
});

var authorData = mongoose.model('authordata',authorSchema);

module.exports = authorData;