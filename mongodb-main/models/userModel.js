const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    verified:{type:Boolean,require:true},
},{timestamps:true})
const usermodel=mongoose.model("users",userSchema)
module.exports=usermodel