const express = require("express");
const signupRouter = express.Router();
const userModel = require("../model/User");
const bcrypt= require('bcryptjs');

//signup
function Router(nav){
    signupRouter.post("/",async(req,res)=>{
        const{username,email,password} = req.body;
    
        const userCheck = await userModel.findOne({email});
    
        if(userCheck){
            return res.redirect("/");
        }
    
        var pass = await bcrypt.hash(password,10);
        
        var data = {
            username,
            email,
            password:pass
        }
            var user = userModel(data);
            user.save()
            .then(()=>{
                res.redirect("/books")
            })
    
    
    });
return signupRouter;    

}


module.exports = Router;
