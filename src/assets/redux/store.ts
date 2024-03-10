import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer.ts";
import usersReducer from "./users-reducer.ts";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer.ts";
import appReducer from "./app-reducer.ts";

let reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

export default store;

window.store = store;
