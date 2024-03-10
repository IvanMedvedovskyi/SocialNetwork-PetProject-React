import {ActionTypes, ContactsType, PhotosType} from "../../types/types";

const ON_INPUT_CHANGE: 'ON_INPUT_CHANGE' = 'ON_INPUT_CHANGE';
const ADD_NEW_POST: 'ADD_NEW_POST' = 'ADD_NEW_POST';
const SET_USER_PROFILE: 'SET_USER_PROFILE' = 'SET_USER_PROFILE';
const SET_LOADING: 'SET_LOADING' = 'SET_LOADING';
const SET_STATUS: 'SET_STATUS' = 'SET_STATUS';

type InitialStateType = typeof initialState;
type ProfileDataType = {
    aboutMe: string | null;
    contacts: ContactsType;
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    photos: PhotosType;
    userId: number;
};

const initialState: InitialStateType = {
    posts: [],
    newPostText: "",
    profilePageData: {},
    isLoading: false,
    status: '',
};


const profileReducer = (state = initialState, action: ActionTypes<typeof actions>) => {
    switch (action.type) {
        case ON_INPUT_CHANGE:
            return {...state, newPostText: action.inputChange}

        case ADD_NEW_POST:
            const newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profilePageData: action.profilePageData,
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loading,
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;
    }
}

export const actions = {
    onInputChange: (inputChange: string) => ({type: ON_INPUT_CHANGE, inputChange}),
    addNewPost: () => ({type: ADD_NEW_POST}),
    setUserProfile: (profilePageData: ProfileDataType) => ({type: SET_USER_PROFILE, profilePageData}),
    setLoadingProfile: (loading: boolean) => ({type: SET_LOADING, loading}),
    setStatus: (status: string) => ({type: SET_STATUS, status}),
}


export const addNewPost = () => ({
    type: ADD_NEW_POST
})

export const setUserProfile = (profilePageData: ProfileDataType) => ({
    type: SET_USER_PROFILE,
    profilePageData,
})

export const setLoadingProfile = (loading: boolean) => ({
    type: SET_LOADING,
    loading,
})

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status,
})


export default profileReducer;