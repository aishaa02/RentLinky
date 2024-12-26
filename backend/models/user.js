import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true,
      maxLength:[30, "name cannot exceed 30 charecter"],
      minLength:[2, "name must be contain atleast 2 charecter"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "please provide valid email"]
    },
    password:{
        type:String,
        required:true,
        minLength:[6, "password has to be minimum 6 charecter"]
    },
    role:{
        type:String,
        required:true,
        enum:["Tenant","Landlord"]
    }
},
{
    timestamp:true
})


//password hashing
// userSchema.pre("save", async function (next){
//     if(!this.isModified.password)
//     {
//        return next();
//     }

//     this.password= await bcrypt.hash(this.password,10);
// })

// //password comparing
// userSchema.methods.comparePassword=async function (enterredPassword){
//     return bcrypt.compare(enterredPassword,this.password)
// } 

// //cookie-sessions
// userSchema.methods.getjwt=function (){
//     return jwt.sign({_id:this._id},"RENTLINK210")
// }

export const User=mongoose.model("User",userSchema)