const express = require("express");
const addauthRouter = express.Router();
const authorData = require('../model/authorData');

function router(nav){
    addauthRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'library'
        })
    })
    addauthRouter.post('/addAuthor',function(req,res){
        var item = {
            Name : req.body.Name,
            Image : req.body.Image
        }
        var author = authorData(item);
        author.save();
        res.redirect('/authors');
        
    })
    return addauthRouter;
}
module.exports = router;