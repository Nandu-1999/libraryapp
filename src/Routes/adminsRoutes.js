const express = require("express");
const adminRouter = express.Router();
const bookData = require('../model/bookData');


function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:'library'
        })
    })
    adminRouter.post('/add',function(req,res){
        var item = {
            Title :req.body.Title,
            Author :req.body.Author,
            Genre : req.body.Genre,
            Image : req.body.Image
        }
        var book = bookData(item);
        book.save();
        res.redirect('/books');
    })
    return adminRouter;
}
module.exports = router;
