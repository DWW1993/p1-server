import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetChirps');   
};

const read = (id: number) => {
    return row('spGetChirp', [id]);
};

const destroy = (id: number) => {
    return empty('spDestroyChirp', [id]);
};

const create = (userId: number, message: string) => {
    return row('spCreateChirp', [userId, message]);
};

const update = (id: number, userId: number, message: string) => {
    return row('spUpdateChirps', [id, userId, message]);
};

export default {
    all,
    read,
    destroy,
    create,
    update
};
