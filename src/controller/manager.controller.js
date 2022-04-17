require("dotenv").config();
const jwt=require("jsonwebtoken");
const newToken=(user)=>{
    return jwt.sign({user},process.env.myKey)
}

const express=require("express");

const router=express.Router();

const Manager=require("../model/manager.model");

router.get("/",async(req,res)=>{
    try {
        
        const manager=await Manager.find().lean().exec();

        res.send(manager);
    } catch (error) {
       res.send(error.message) 
    }
})


router.post("/signin",async(req,res)=>{
    try {
        let manager=await Manager.findOne({email:req.body.email});
        if(manager){
           return res.send("email already exists")
        }
      manager=await Manager.create(req.body);

      const token=newToken(manager);

    return res.send({token,manager});

    } catch (error) {
        res.send(error.message)
    }
})

router.post("/login",async(req,res)=>{
    try {
        const user = await Manager.findOne({ email: req.body.email });
      
        // If user is not found then return error
        if (!user)
          return res
            .status(400)
            .send({ message: "Please try another email or password*" });
    
        // if user is found then we will match the passwords
        const match = user.checkPassword(req.body.password);
    
        if (!match)
          return res
            .status(400)
            .send({ message: "Please try another email or password" });
    
        // then we will create the token for that user
        const token = newToken(user);
    
        // then return the user and the token
       return res.send({ user, token });
    } catch (error) {
        res.send(error.message)
    }
})


module.exports=router;