

const mongoose=require("mongoose");

const residentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    type:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})



const Resident=mongoose.model("Resident",residentSchema);

module.exports=Resident;