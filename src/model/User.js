const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

const user = mongoose.model('user',userSchema);

module.exports = user;