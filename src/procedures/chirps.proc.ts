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

const create = (userid: number, message: string) => {
    return row('spCreateChirp', [userid, message]);
};

const update = (id: number, userid: number, message: string) => {
    return row('spUpdateChirp', [id, userid, message]);
};

export default {
    all,
    read,
    destroy,
    create,
    update
};