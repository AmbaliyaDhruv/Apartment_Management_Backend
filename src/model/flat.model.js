
const mongoose=require("mongoose")

const flatSchema=new mongoose.Schema({
    no:{type:Number, required:true},
    block:{type:mongoose.Schema.Types.ObjectId, ref:"Block",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Flat=mongoose.model("Flat",flatSchema);

module.exports=Flat;