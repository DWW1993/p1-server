import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetFollowingChirps');   
};

const destroy = (followingId: number) => {
    return empty('spDeleteFollower', [followingId]);
};

const create = (followingId: number, followerId: number) => {
    return empty('spCreateFollower', [followerId, followingId]);
}

export default {
    all,
    destroy,
    create,
};