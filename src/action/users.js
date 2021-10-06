//Exporting Action Type
export const RECEIVE_USERS = 'RECEIVE_USERS';

//Exporting Action Creators
export function receiveUsers(users) {   

    return {
        type: RECEIVE_USERS,
        users,
    }
}