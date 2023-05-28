import { ACTION_TYPES } from "../constants/actionTypes";

const initialState = {
    user:{},
    isLoggedIn: false,
    loader:false,
    Cars:[],
}

export const users = (state = initialState, action) =>{
    switch(action.type){

        case ACTION_TYPES.USER_REGISTER_REQUEST:
            return {...state,  loader:true}
        case ACTION_TYPES.USER_REGISTER_SUCCESS:
            return {...state, user:{}, isLoggedIn:true, loader:false}
        case ACTION_TYPES.USER_REGISTER_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES.USER_LOGIN_REQUEST:
            return {...state,  loader:true}
        case ACTION_TYPES.USER_LOGIN_SUCCESS:
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
            return {...state, user: action.payload, isLoggedIn:true, loader:false}
        case ACTION_TYPES.USER_LOGIN_FAILED:
            return {...state, loader:false}
        
        case ACTION_TYPES.USER_LOGOUT_REQUEST:
            return {...state,  loader:true}
        case ACTION_TYPES.USER_LOGOUT_SUCCESS:
            localStorage.clear()
            return {...state, user:{},Cars:[], isLoggedIn:false, loader:false}
        case ACTION_TYPES.USER_LOGOUT_FAILED:
            return {...state, loader:false}

 
        case ACTION_TYPES.FETCH_USER_PROFILE_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FETCH_USER_PROFILE_SUCCESS:
            return {...state, user: action.payload,loader:false}
        case ACTION_TYPES.FETCH_USER_PROFILE_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES.SET_USER_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.SET_USER_SUCCESS:
            return {...state, user: action.payload,loader:false}
        case ACTION_TYPES.SET_USER_FAILED:
            return {...state, loader:false}
        
        case ACTION_TYPES.EDIT_USER_PROFILE_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.EDIT_USER_PROFILE_SUCCESS:
            return {...state, user: action.payload,loader:false}
        case ACTION_TYPES.EDIT_USER_PROFILE_FAILED:
            return {...state, loader:false}

    //--------------------------------------------------------USER Car Api
     
        case ACTION_TYPES.FILTER_USER_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FILTER_USER_CAR_SUCCESS:
            return {...state, Cars: action.payload,loader:false}
        case ACTION_TYPES.FILTER_USER_CAR_FAILED:
            return {...state, loader:false}
 
        case ACTION_TYPES.USER_FETCH_ALL_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.USER_FETCH_ALL_CAR_SUCCESS:
            return {...state, Cars: action.payload,loader:false}
        case ACTION_TYPES.USER_FETCH_ALL_CAR_FAILED:
            return {...state, loader:false}
        
        default:
            return state
    }

}