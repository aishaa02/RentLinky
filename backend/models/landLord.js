import mongoose from "mongoose";

const HouseSchema=new mongoose.Schema({
    homeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    hometype:{
        type:String,
        required:true,
        enum:["House","Apartment"]
    },
    location:{
        type:String,
        required:true
    },
    bedrooms:{
        type:Number,
        required:true,
    },
    beds:{
        type:Number,
        required:true,
    },
    bathrooms:{
        type:String,
        required:true,
        enum:["Private & Unattached","Private with shared some peoples","Shared or common"]
    },
    amenities:{
        type:[String],
        required:true,
        enum:["wifi","Warm water", "Electricity bill", "Parking", "others"]
    },
    expired:{
        type:Boolean,
        required:true,
        default:true
    },
    price:{
        type:Number,
        required:true
    }
})

export const House=mongoose.model("House",HouseSchema)