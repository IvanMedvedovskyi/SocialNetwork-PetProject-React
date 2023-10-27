import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
