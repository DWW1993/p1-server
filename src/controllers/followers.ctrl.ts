import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/followers.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all(+req.params.followerId)
    .then((sets) => {
        res.json(sets);
    });
};

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(req.body.followingId)
    .then((sets) => {
        res.json(sets);
    })
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.followingId, req.body.followerId)
    .then((sets) => {
        res.json(sets);
    });
};
