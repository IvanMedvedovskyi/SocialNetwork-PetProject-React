const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_PERSONAL_DATA = 'SET_PERSONAL_DATA';
const SET_PHOTO = 'SET_PHOTO';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    authPersonalData: [],
}

const authReducer = (state = initialState, action) => {
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

export const setAuthData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    data: {userId, email, login, isAuth}
})

export const setAuthPersonalData = (authPersonalData) => ({
    type: SET_PERSONAL_DATA,
    authPersonalData,
})

export const setPersonalPhoto = (photo) => ({
    type: SET_PHOTO,
    photo,
})
export const getCaptchaSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl,
})


export default authReducer;