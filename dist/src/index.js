"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./Router"));
const dotenv_1 = require("dotenv");
const Functions_1 = __importDefault(require("./Functions"));
(0, dotenv_1.config)();
(0, Functions_1.default)(process.env.MONGO_STRING);
Router_1.default.listen(8080 || process.env.PORT, () => {
  console.log(`Express API Started at ${8080 || process.env.PORT}`);
});
process.on("uncaughtException", (err) => {
  console.log(
    `Whoops...! There was an uncaught exception => (${err.name}, ${err.message}, ${err.stack})`
  );
});
