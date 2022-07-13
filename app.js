const express = require("express");
const nav = [
    {
        link:'/books',name:"BOOK"
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addAuthor',name : 'Add Author'
    },
    {
        link:'/signin',name: 'SIGNIN'
    },
    {
        link: '/signup',name: 'SIGNUP'
    }
];
const app = new express();
const booksRouter = require("./src/Routes/bookRoutes")(nav);
const authorRouter = require("./src/Routes/authorRoutes")(nav);
const adminRouter = require("./src/Routes/adminsRoutes")(nav);
const addauthRouter = require("./src/Routes/addauth")(nav);
const loginRouter = require("./src/Routes/loginRoutes")(nav);
const signupRouter = require("./src/Routes/signupRoutes")(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine' , 'ejs');
app.set('views',__dirname+'/src/views')
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
app.use('/addAuthor',addauthRouter);
app.use('/signin',loginRouter);
app.use('/signup',signupRouter);

app.get("/",function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'

    });
});
app.get("/signin",(req,res)=>{
    res.render("Login", {
        nav,
        title:"Login"
    })});

// load signup page
app.get("/signup",(req,res)=>{
    res.render("Signup", {
        nav,
        title:"SignUp"
    })});
app.listen(1220);