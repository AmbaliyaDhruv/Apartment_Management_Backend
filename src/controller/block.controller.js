

const express=require("express");
const router=express.Router();
const Block=require("../model/block.model");

router.get("/",async(req,res)=>{
try {
     const blocks=await Block.find().lean().exec();
     res.send(blocks)
} catch (error) {
    res.send(error.message);
}
})



module.exports=router;