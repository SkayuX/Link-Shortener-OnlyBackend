"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URL = require("url").URL;
function connectDB(MONGO_STRING) {
  mongoose_1.default
    .connect(MONGO_STRING)
    .then(() =>
      console.log(`Logged to MongoDB using <-${MONGO_STRING}-> String`)
    );
}
exports.default = connectDB;
