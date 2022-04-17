

const mongoose=require("mongoose");

const residentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true,default:"Male"},
    age:{type:Number,required:true},
    type:{type:String,required:true},
    flat:{type:mongoose.Schema.Types.ObjectId,ref:"Flat",required:true},
    block:{type:mongoose.Schema.Types.ObjectId,ref:"Block",required:true}
},{
    versionKey:false,
    timestamps:true
})



const Resident=mongoose.model("Resident",residentSchema);

module.exports=Resident;