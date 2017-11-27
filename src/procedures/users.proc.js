"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetUsers');
};
const read = (id) => {
    return base_proc_1.row('spGetUser', [id]);
};
const destroy = (id) => {
    return base_proc_1.empty('spDeleteUser', [id]);
};
const create = (handle, username, email, password) => {
    return base_proc_1.row('spCreateUser', [handle, username, email, password]);
};
const update = (id, handle, username, email, password) => {
    return base_proc_1.empty('spUpdateUser', [id, handle, username, email, password]);
};
const login = (email) => {
    return base_proc_1.row('spGetUserByEmail', [email]);
};
exports.default = {
    all,
    read,
    destroy,
    create,
    update,
    login
};
