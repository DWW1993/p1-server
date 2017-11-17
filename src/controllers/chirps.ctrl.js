"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chirps_proc_1 = require("../procedures/chirps.proc");
exports.all = (req, res, next) => {
    chirps_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    chirps_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    chirps_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    chirps_proc_1.default.create(req.body.userid, req.body.message)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    chirps_proc_1.default.update(+req.params.id, req.body.userid, req.body.message)
        .then((sets) => {
        res.json(sets);
    });
};
