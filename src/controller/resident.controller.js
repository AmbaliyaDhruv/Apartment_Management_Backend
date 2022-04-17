

const express=require("express");

const router=express.Router();

const Resident=require("../model/resident.model");

router.get("/",async(req,res)=>{

    try {
        //  let {page,size}=req.query;
        //  if(!page){
        //      page=1;
        //  }
        //  if(!size){
        //      size=3;
        //  }

        //  const limit=parseInt(size);
        //   const skip=(page-1)*limit;
        // limit(limit).skip(skip)
        const residents=await Resident.find(req.query).populate({path:"flat",select:{no:1,_id:1}}).populate({path:"block",select:{name:1,_id:1}}).lean().exec();

        res.send(residents);

    } catch (error) {
        res.send(error.message)
    }
})



router.get("/:id",async(req,res)=>{
    try {
        
        const resident=await Resident.findById(req.params.id).populate({path:"flat",select:{no:1,_id:1}}).populate({path:"block",select:{name:1,_id:1}}).lean().exec();

        res.send(resident);

    } catch (error) {
        res.send(error.message)
    }
})

router.post("/",async(req,res)=>{
    try {
        
     const resident=await Resident.create(req.body);

        res.send(resident);

    } catch (error) {
        res.send(error.message)
    }
})

module.exports=router;
