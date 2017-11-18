"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chirps_1 = require("./chirps");
const auth_1 = require("./auth");
const users_1 = require("./users");
const follower_1 = require("./follower");
const express_1 = require("express");
const router = express_1.Router();
router
    .use('/chirps', chirps_1.default)
    .use('/auth', auth_1.default)
    .use('/users', users_1.default)
    .use('/following', follower_1.default);
exports.default = router;
