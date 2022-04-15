"use strict";
// create route for getting the link by frontend
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LinkSchema_1 = __importDefault(require("../Schemas/LinkSchema"));
const router = (0, express_1.Router)();
router.get("/get/:id", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (id) {
      const doesExist = yield LinkSchema_1.default.findOne({ shortUrl: id });
      if (doesExist) {
        res.send({
          success: true,
          data: {
            longUrl: doesExist.longUrl,
            shortUrl: doesExist.shortUrl,
            code: 200,
          },
        });
      } else {
        res.send({
          success: false,
          data: { message: "No link was found", code: 404 },
        });
      }
    } else {
      res.send({
        success: false,
        data: { message: "No link was provided", code: 400 },
      });
    }
  })
);
exports.default = router;
