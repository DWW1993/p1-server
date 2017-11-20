"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chirps_ctrl_1 = require("../controllers/chirps.ctrl");
const router = express_1.Router();
router
    .get('/', chirps_ctrl_1.all)
    .get('/:userId', chirps_ctrl_1.userAll)
    .put('/:id', chirps_ctrl_1.update)
    .post('/', chirps_ctrl_1.create)
    .get('/:id', chirps_ctrl_1.read)
    .delete('/:id', chirps_ctrl_1.destroy);
exports.default = router;
