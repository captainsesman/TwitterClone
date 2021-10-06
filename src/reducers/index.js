import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'

//Reducer to show the loading state of the app
import { loadingBarReducer } from 'react-redux-loading'



export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
})