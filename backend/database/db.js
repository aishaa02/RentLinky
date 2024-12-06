import mongoose from "mongoose"

const database= async ()=>{
       await mongoose.connect("mongodb+srv://harshnesari:2iKWlggObvJVlSDy@tinderbackend.m90xz.mongodb.net/RentLink")
}

export default database;