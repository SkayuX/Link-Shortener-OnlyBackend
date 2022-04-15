import mongoose from "mongoose";

const URL = require("url").URL;

export default function connectDB(MONGO_STRING: any) {
  mongoose
    .connect(MONGO_STRING)
    .then(() =>
      console.log(`Logged to MongoDB using <-${MONGO_STRING}-> String`)
    );
}
