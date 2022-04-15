"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errors_1 = __importDefault(require("./errors"));
const create_1 = __importDefault(require("./create"));
const getLink_1 = __importDefault(require("./getLink"));
const redirect_1 = __importDefault(require("./redirect"));
const router = (0, express_1.Router)();
router.use('/', redirect_1.default);
router.use('/', getLink_1.default);
router.use("/", create_1.default);
router.use('/', errors_1.default);
exports.default = router;
