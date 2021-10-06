//Import Action type
import { RECEIVE_USERS } from "../action/users";


//Reducer for users
export default function users(state = {}, action) {    
    switch (action.type) {
        //Imported Action type Used
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        default:
            return state
    }
    
}