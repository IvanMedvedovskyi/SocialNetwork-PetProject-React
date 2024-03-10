import {ProfileDataType} from "../../types/types";

const SET_AUTH_DATA: 'SET_AUTH_DATA' = 'SET_AUTH_DATA';
const SET_PERSONAL_DATA: 'SET_PERSONAL_DATA' = 'SET_PERSONAL_DATA';
const SET_PHOTO: 'SET_PHOTO' = 'SET_PHOTO';
const GET_CAPTCHA_URL_SUCCESS: 'GET_CAPTCHA_URL_SUCCESS' = 'GET_CAPTCHA_URL_SUCCESS';

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
    authPersonalData: ProfileDataType | {},
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    authPersonalData: {},
}

const authReducer = (state: InitialStateType = initialState, action): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth,
            }
        case SET_PERSONAL_DATA:
            return {
                ...state,
                authPersonalData: action.authPersonalData
            }
        case SET_PHOTO:
            return {
                ...state,
                authPersonalData: {...state.authPersonalData, photos: [action.photo]}
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthData: (userId: number, email: string, login: string, isAuth: boolean) => ({
        type: SET_AUTH_DATA, data: {userId, email, login, isAuth}}),

    setAuthPersonalData: (authPersonalData: ProfileDataType) => ({
        type: SET_PERSONAL_DATA,
        authPersonalData,
    }),

    setPersonalPhoto: (photo: string) => ({
        type: SET_PHOTO,
        photo,
    }),

    getCaptchaSuccess: (captchaUrl: string) => ({
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl,
    })

}

export default authReducer;