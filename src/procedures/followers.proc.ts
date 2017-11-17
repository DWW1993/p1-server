import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetFollowingChirps');   
};

const destroy = (followingId: number) => {
    return empty('spDeleteFollower', [followingId]);
};

const create = (followingId: number, followerId: number) => {
    return empty('spCreateFollower', [followingId, followerId]);
}

export default {
    all,
    destroy,
    create,
};