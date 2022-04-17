

const express=require("express");

const router=express.Router();

const Resident=require("../model/resident.model");

router.get("/",async(req,res)=>{

    try {
         
        const residents=await Resident.find().lean().exec();

        res.send(residents);

    } catch (error) {
        res.send(error.message)
    }
})

module.exports=router;
