// // import mongoose from "mongoose";

// // const HouseSchema=new mongoose.Schema({
// //     homeId:{
// //         type:mongoose.Schema.Types.ObjectId,
// //         ref:"User",
// //     },
// //     hometype:{
// //         type:String,
// //         required:true,
// //         enum:["House","Apartment"]
// //     },
// //     location:{
// //         type:String,
// //         required:true
// //     },
// //     bedrooms:{
// //         type:Number,
// //         required:true,
// //     },
// //     beds:{
// //         type:Number,
// //         required:true,
// //     },
// //     bathrooms:{
// //         type:String,
// //         required:true,
// //         enum:["Private & Unattached","Private with shared some peoples","Shared or common"]
// //     },
// //     amenities:{
// //         type:[String],
// //         required:true,
// //         enum:["wifi","Warm water", "Electricity bill", "Parking", "others"]
// //     },
// //     expired:{
// //         type:Boolean,
// //         required:true,
// //         default:true
// //     },
// //     price:{
// //         type:Number,
// //         required:true
// //     },
// //     title:{
// //         type:String,
// //         required:true
// //     },
// //     discription:{
// //         type:String,
// //         required:true
// //     }
// // })

// // export const House=mongoose.model("House",HouseSchema)

// import mongoose from "mongoose";

// const HouseSchema = new mongoose.Schema({
//   homeId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true, // Ensure homeId is always provided
//   },
//   hometype: {
//     type: String,
//     required: true,
//     enum: ["House", "Apartment"], // Limit to predefined values
//   },
//   location: {
//     type: String,
//     required: true, // Ensure location is always provided
//   },
//   bedrooms: {
//     type: Number,
//     required: true
//   },
//   beds: {
//     type: Number,
//     required: true
//   },
//   bathrooms: {
//     type: [String],
//     required: true,
//     enum: [
//       "Private & Unattached",
//       "Private with shared some peoples",
//       "Shared or common",
//     ], // Restrict to allowed values
//   },
//   amenities: {
//     type: [String],
//     required: true,
//     validate: {
//       validator: function (value) {
//         // Ensure amenities array contains valid values
//         const validAmenities = [
//           "wifi",
//           "Warm water",
//           "Electricity bill",
//           "Parking",
//           "others",
//         ];
//         return value.every((item) => validAmenities.includes(item));
//       },
//       message: "Invalid amenity provided.",
//     },
//   },
//   expired: {
//     type: Boolean,
//     required: true,
//     default: false, // Set default to false (active listing)
//   },
//   price: {
//     type: Number,
//     required: true,
//     min: 0, // Price must be a positive value
//   },
//   title: {
//     type: String,
//     trim: true, // Remove extra spaces
//     // 
//       },
//       description: {
//     type: String,
//     trim: true, // Remove extra spaces
//   },
// });

// export const House = mongoose.model("House", HouseSchema);

import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema({
  homeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Ensure homeId is always provided
  },
  hometype: {
    type: String,
    required: true,
    enum: ["House", "Apartment"], // Limit to predefined values
  },
  location: {
    type: String,
    required: true, // Ensure location is always provided
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: [String],
    enum: ["Private & Unattached", "Private with shared some peoples", "Shared or common"],
    required: true,
  },
  
  amenities: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        // Ensure amenities array contains valid values
        const validAmenities = [
          "wifi",
          "Warm water",
          "Electricity bill",
          "Parking",
          "others",
        ];
        return value.every((item) => validAmenities.includes(item));
      },
      message: "Invalid amenity provided.",
    },
  },
  expired: {
    type: Boolean,
    required: true,
    default: false,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  title: {
    type: String,
    trim: true, 
  },
  description: {
    type: String,
    trim: true, 
  },
  coverImage: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Validate that the value starts with '/uploads/' and ends with an image file extension
        return /^\/uploads\/.*\.(png|jpg|jpeg|webp|avif)$/i.test(value);
      },
      message: "Invalid cover image path. It must start with '/uploads/' and end with a valid image extension.",
    },
  },
  
});

export const House = mongoose.model("House", HouseSchema);

