import {ActionTypes, PhotosType} from "../../types/types";

const SET_LOADING: 'SET_LOADING' = 'SET_LOADING';
const SET_USERS: 'SET_USERS' = 'SET_USERS';
const SET_CURRENT_PAGE: 'SET_CURRENT_PAGE' = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT' = 'SET_TOTAL_USERS_COUNT';
const NOTE_NEW_CURRENT_PAGE: 'NOTE_NEW_CURRENT_PAGE' = 'NOTE_NEW_CURRENT_PAGE';
const FOLLOW: 'FOLLOW' = 'FOLLOW';
const UNFOLLOW: 'UNFOLLOW' = 'UNFOLLOW';

type InitialStateType = {
    isLoading: boolean
    users: UsersType | []
    currentPage: number
    newCurrentPage: number | null
    count: number
    totalUserCount: number | null
}

export type UsersType = {
    followed: boolean
    id: number
    name: string
    photos: PhotosType
    status: string
    uniqueUrlName: string | null
}

const initialState = {
    isLoading: false,
    users: [],
    currentPage: 1,
    newCurrentPage: null,
    count: 27,
    totalUserCount: null,
}

const usersReducer = (state: InitialStateType = initialState, action: ActionTypes<typeof actions>): InitialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loading,
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        case NOTE_NEW_CURRENT_PAGE:
            return {
                ...state,
                newCurrentPage: action.newCurrentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount,
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        default:
            return state;
    }
}

export const actions = {
    setLoading: (loading: boolean) => ({type: SET_LOADING, loading}),
    setUsers: (users: UsersType) => ({type: SET_USERS, users}),
    setCurrentPage: (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber}),
    setTotalUsersCount: (totalUserCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount}),
    noteNewCurrentPage: (newCurrentPage: number) => ({type: NOTE_NEW_CURRENT_PAGE, newCurrentPage}),
    setFollow: (userId: number) => ({type: FOLLOW, userId}),
    setUnFollow: (userId: number) => ({type: UNFOLLOW, userId})
}

export default usersReducer;