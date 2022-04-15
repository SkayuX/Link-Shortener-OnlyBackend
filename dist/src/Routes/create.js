"use strict";
// create a new link
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const valid_url_1 = __importDefault(require("valid-url"));
const LinkSchema_1 = __importDefault(require("../Schemas/LinkSchema"));
const router = (0, express_1.Router)();
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    if (valid_url_1.default.isUri(link)) {
        const shortUrlCode = Math.floor(Math.random() * 90000) + 10000;
        const newLink = new LinkSchema_1.default({
            longUrl: link,
            shortUrl: shortUrlCode,
            date: Date.now(),
        }).save();
        res.send({ success: true, data: { message: "Successfully created new link!", code: 200, shortCode: shortUrlCode } });
    }
    else {
        res.send({ success: false, data: { message: "Invalid link was provided! Make sure it starts with https:// or http:// !", code: 400 } });
    }
}));
exports.default = router;
