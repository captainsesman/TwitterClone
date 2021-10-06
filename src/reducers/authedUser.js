//Import Action type
import { SET_AUTHED_USER } from "../action/authedUser";


//Reducer for users
export default function authedUser(state = null, action) {
    switch (action.type) {
        //Imported Action type Used
        case SET_AUTHED_USER:
            return action.id
        default:
            return state
    }
}