import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
