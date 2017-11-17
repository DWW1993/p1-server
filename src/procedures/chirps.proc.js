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
const create = (userid, message) => {
    return base_proc_1.row('spCreateChirp', [userid, message]);
};
const update = (id, userid, message) => {
    return base_proc_1.row('spUpdateChirps', [id, userid, message]);
};
exports.default = {
    all,
    read,
    destroy,
    create,
    update
};
