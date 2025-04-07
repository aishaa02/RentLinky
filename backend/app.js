import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import database from "./database/db.js";

import AuthRouter from "./router/AuthRouter.js"; 
import profileRouter from "./router/profile.js";
import homeRouter from "./router/addHouse.js";
import getHouseRouter from "./router/getHomes.js";
import detailsHouserouter from "./router/getHouseDetails.js";
import bookingRouter from "./router/booking.js";

dotenv.config({ path: "./.env" });

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  credentials: true
}));

// Static files for images or docs
app.use('/uploads', express.static('uploads'));

// Root route with headers
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  res.send("Hello!");
});

// Routes
app.post("/registration", AuthRouter);
app.post("/login", AuthRouter);
app.get("/userProfile", profileRouter);
app.post("/addHouse", homeRouter);
app.get("/getHouses", getHouseRouter);
app.put("/updateHouse/:id", homeRouter);
app.post("/deleteHouse/:id", homeRouter);
app.post("/filterHouse", getHouseRouter);
app.post("/logout", AuthRouter);
app.get("/tenent/displayHouse/:id", detailsHouserouter);
app.get("/landlordHouse", getHouseRouter);
app.put("/profile/update", profileRouter);
app.post("/bookHouse/:id", bookingRouter);
app.get("/houseDetails/:houseId", detailsHouserouter);
app.post("/uploads", homeRouter);
app.post("/manageBooking/:houseId", bookingRouter);
app.post("/updatePayment", bookingRouter);

// Connect to DB and start server
database().then(() => {
  console.log("✅ DB connected");
  app.listen(3000, () => {
    console.log("🚀 Server running at port 3000");
  });
}).catch((err) => {
  console.error("❌ DB connection failed:", err.message);
});
