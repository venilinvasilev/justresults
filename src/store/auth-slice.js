import { getUserSession } from '../utils/api/data';

const initialState = {
    _id: null,
    email: null,
    username: 'Guest',
    loggedIn: false,
    role: 'guest',
}

export const userAuthActions = {
    AUTH_LOGIN: 'login',
    AUTH_LOGOUT: 'logout'
}

const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case userAuthActions.AUTH_LOGIN: {
            return {
                _id: action.payload._id,
                email: action.payload.email,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                address: action.payload.address,
                loggedIn: true,
                role: action.payload.role,
            }
        }
        case userAuthActions.AUTH_LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export default userAuthReducer;

//  Thunk function

export const userAuthCheckSession = async (dispatch) => {
    try {
        const user = await getUserSession();
        if(Object.keys(user).length) {
            return dispatch({ type: userAuthActions.AUTH_LOGIN, payload: user});
        }
    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}