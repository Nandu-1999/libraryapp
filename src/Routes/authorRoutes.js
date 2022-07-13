const express = require("express");
const authorRouter = express.Router();
const authorData = require('../model/authorData');


function Router(nav){
        authorRouter.get('/',function(req,res){
            authorData.find()
            .then(function(authors){
                res.render("authors",
            {
                nav,
                title:'Library',
                authors
        
            });
            })
            
        })
        authorRouter.get('/:id',function(req,res){
            const id = req.params.id;
            authorData.findOne({_id:id})
            .then(function(author){
                res.render('author',{
                    nav,
                    title:'Library',
                    author
            });

            })
            
        });
    return authorRouter;
}

    module.exports = Router;