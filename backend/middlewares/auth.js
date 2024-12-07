// import ErrorHandler from "./error";
import { User } from "../models/user";

const isAuth= async (req,res,next)=>{
    const {token}=req.cookies;

    if(!token)
    {
        throw "not registered";
    }

    const decoded=jwt.verify(token,"RENTLINK210")
    const {_id}=decoded

    req.user= await User.findOne({_id:_id});
    next();
}

export default isAuth;