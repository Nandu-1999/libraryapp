const express = require("express");
const loginRouter = express.Router();
const userModel = require("../model/User");
const bcrypt= require('bcryptjs');



//login
function Router(nav){
    loginRouter.post("/",async(req,res)=>{
        const{email,password} = req.body;
    
        if(email==="admin@gmail.com" && password==="admin123"){
            
            return res.render("books",{
                nav,
                title:"library",
                books
            });
        }
        else{
            const userCheck = await userModel.findOne({email});
            const passCheck = await bcrypt.compare(password, userCheck.password);
    
        if(!userCheck){
            return res.render("/signin");
        }
        if(!passCheck){
            return res.render("/signin");
        }
        
        
        res.redirect('/books');
    
    

        }
        
    });
return loginRouter;
}

module.exports = Router;
