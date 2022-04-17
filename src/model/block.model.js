
const mongoose=require("mongoose");

const blockSchema=new mongoose.Schema({
    name:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})


const Block=mongoose.model("Block",blockSchema);

module.exports=Block;