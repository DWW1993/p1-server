import { rows, row, empty } from "./base.proc";

const all = (followerId: number) => {
    return rows('spGetFollowingChirps', [followerId]);   
};

const destroy = (followerId: number) => {
    return empty('spDeleteFollower', [followerId]);
};

const create = (followerId: number, followingId: number) => {
    return row('spCreateFollower', [followerId, followingId]);
};

export default {
    all,
    destroy,
    create,
};