import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/chirps.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
    .then((sets) => {
        res.json(sets);
    });
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
    .then((sets) => {
        res.json(sets);
    })
};

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id)
    .then((sets) => {
        res.json(sets);
    })
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.userId, req.body.message)
    .then((sets) => {
        res.json(sets);
    });
};

export const update = (req: Request, res: Response, next: NextFunction) => {
    procedures.update(+req.params.id, req.body.userId, req.body.message)
    .then((sets) => {
        res.json(sets);
    });
};