"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Ruta inicial del usuario
router.get('/', (req, res) => {
    res.render('index');
});
exports.default = router;
