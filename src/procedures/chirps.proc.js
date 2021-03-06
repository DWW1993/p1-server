"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetChirps');
};
const read = (id) => {
    return base_proc_1.row('spGetChirp', [id]);
};
const destroy = (id) => {
    return base_proc_1.empty('spDestroyChirp', [id]);
};
const create = (userId, message) => {
    return base_proc_1.row('spCreateChirp', [userId, message]);
};
const update = (id, userId, message) => {
    return base_proc_1.empty('spUpdateChirps', [id, userId, message]);
};
const userAll = (userId) => {
    return base_proc_1.rows('spGetChirpsByUser', [userId]);
};
exports.default = {
    all,
    read,
    destroy,
    create,
    update,
    userAll,
};
