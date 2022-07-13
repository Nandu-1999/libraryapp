const express = require("express");
const booksRouter = express.Router();
const bookData = require('../model/bookData');


function Router(nav){
    // var books = [
    //     {
    //         title : "Tom & Jerry",
    //         author : "Joseph Barbera",
    //         genre : "comic",
    //         img : "Tom.jpg"
    //     },
    //     {
    //         title : "Oggy & Cockroaches",
    //         author : "La magician",
    //         genre : "comic",
    //         img : "oggy.jpg"
    //     },
    //     {
    //         title : "Harry Potter",
    //         author : "J.K Rowling",
    //         genre : "Fiction",
    //         img : "harry.jpg"
    //     }];
        booksRouter.get('/',function(req,res){
            bookData.find()
            .then(function(books){
                res.render("books",
            {
                nav,
                title:'Library',
                books
        
            });
            })
            
        })
        booksRouter.get('/:id',function(req,res){
            const id = req.params.id;
            bookData.findOne({_id:id})
            .then(function(book){
                res.render('book',{
                    nav,
                    title:'Library',
                    book
            });

            })
            
        });
    return booksRouter;
}

    module.exports = Router;