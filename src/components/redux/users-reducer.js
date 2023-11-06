const SET_LOADING = 'SET_LOADING';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const NOTE_NEW_CURRENT_PAGE = 'NOTE_NEW_CURRENT_PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    isLoading: false,
    users: [],
    currentPage: 1,
    newCurrentPage: null,
    count: 27,
    totalUserCount: null,
}

const usersReducer = (state = initialState, action) => {
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

export const setLoading = (loading) => ({
    type: SET_LOADING,
    loading
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber,
})

export const setTotalUsersCount = (totalUserCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount,
})

export const noteNewCurrentPage = (newCurrentPage) => ({
    type: NOTE_NEW_CURRENT_PAGE,
    newCurrentPage,
})

export const setFollow = (userId) => ({
    type: FOLLOW,
    userId,
})

export const setUnFollow = (userId) => ({
    type: UNFOLLOW,
    userId,
})

export default usersReducer;