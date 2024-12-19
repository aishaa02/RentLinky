// import ErrorHandler from "./error";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken"

const isAuth= async (req,res,next)=>{
    const cookie=req.cookies;
    const {token}=cookie;

    if(!token)
    {
      return res.status(400).send( "please log in");
    }

    const decoded= jwt.verify(token,"RENTLINL2110")
    const {_id}=decoded

    const user= await User.findOne({_id:_id})

    if(!user)
    {
        return res.status(400).send("USer not Founnd or user not authorised")
    }
    req.user= user;
    next();
}

export default isAuth;