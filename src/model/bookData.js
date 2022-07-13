const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    Title:String,
    Author:String,
    Genre:String,
    Image:String
});

var bookData = mongoose.model('bookdata',bookSchema);

module.exports = bookData;