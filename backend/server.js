//Connect to mongodb database(locally)
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//const userData = require("./models/userModel");
const userRoute=require("./routes/userRoute")
const cors=require("cors");
app.use(cors())
dotenv.config();
app.use(express.json())
mongoose
  .connect("mongodb://127.0.0.1:27017/msd")
  .then(() => {
    console.log("Connected Successfully");
    app.listen( 5000, (err) => {
      if (err) console.log(err);
      console.log(`running at port `);
    });
  })
  .catch((error) => console.log("Failed to connect", error));


app.use(userRoute);