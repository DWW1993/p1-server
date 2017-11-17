"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const ramda_1 = require("ramda");
const expires = 1000 * 60 * 60;
const usersPath = path.join(__dirname, '..', 'users.json');
exports.login = (req, res, next) => {
    const { user, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const found = users.find((u) => {
        if (u.user === user) {
            return true;
        }
        return false;
    });
    if (ramda_1.isNil(found)) {
        res.sendStatus(404);
        return;
    }
};
