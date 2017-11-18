"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const followers_proc_1 = require("../procedures/followers.proc");
exports.all = (req, res, next) => {
    followers_proc_1.default.all(+req.params.followerId)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    followers_proc_1.default.destroy(req.body.followingId)
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    followers_proc_1.default.create(req.body.followingId, req.body.followerId)
        .then((sets) => {
        res.json(sets);
    });
};
