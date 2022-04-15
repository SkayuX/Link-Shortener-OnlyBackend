"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
router.post("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
router.put("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
router.delete("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
router.patch("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
router.head("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
router.options("*", (req, res) => {
    res.status(404).send({ status: false, data: { message: 'Page not found!', code: 404 } });
});
exports.default = router;
