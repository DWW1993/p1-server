"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = (followerId) => {
    return base_proc_1.rows('spGetFollowingChirps', [followerId]);
};
const destroy = (followerId) => {
    return base_proc_1.empty('spDeleteFollower', [followerId]);
};
const create = (followerId, followingId) => {
    return base_proc_1.row('spCreateFollower', [followerId, followingId]);
};
exports.default = {
    all,
    destroy,
    create,
};
