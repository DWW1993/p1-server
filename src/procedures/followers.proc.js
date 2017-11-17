"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetFollowingChirps');
};
const destroy = (followingId) => {
    return base_proc_1.empty('spDeleteFollower', [followingId]);
};
const create = (followingId, followerId) => {
    return base_proc_1.empty('spCreateFollower', [followerId, followingId]);
};
exports.default = {
    all,
    destroy,
    create,
};
