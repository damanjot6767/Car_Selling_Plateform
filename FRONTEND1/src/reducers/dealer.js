import { ACTION_TYPES } from "../constants/actionTypes";

const initialState = {
    dealer:{},
    isLoggedIn: false,
    dealerCars:[],
    loader:false,
    Cars:[],
    Car:{}
}

export const dealer = (state = initialState, action) =>{
    switch(action.type){
        case ACTION_TYPES.DEALER_REGISTER_REQUEST:
            return {...state,  loader:true}
        case ACTION_TYPES.DEALER_REGISTER_SUCCESS:
            return {...state, dealer:{}, isLoggedIn:true, loader:false}
        case ACTION_TYPES.DEALER_REGISTER_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES.DEALER_LOGIN_REQUEST:
            return {...state,  loader:true}
        case ACTION_TYPES.DEALER_LOGIN_SUCCESS:
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
            return {...state, dealer: action.payload, isLoggedIn:true, loader:false}
        case ACTION_TYPES.DEALER_LOGIN_FAILED:
            return {...state, loader:false}
        
        case ACTION_TYPES.DEALER_LOGOUT_REQUEST:
            return {...state,  loader:true}
        case ACTION_TYPES.DEALER_LOGOUT_SUCCESS:
            localStorage.clear()
            return {...state, dealer:{}, dealerCars:[],Cars:[], isLoggedIn:false, loader:false}
        case ACTION_TYPES.DEALER_LOGOUT_FAILED:
            return {...state, loader:false}

 
        case ACTION_TYPES.FETCH_DEALER_PROFILE_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FETCH_DEALER_PROFILE_SUCCESS:
            return {...state, dealer: action.payload,loader:false}
        case ACTION_TYPES.FETCH_DEALER_PROFILE_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES.SET_DEALER_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.SET_DEALER_SUCCESS:
            return {...state, dealer: action.payload,loader:false}
        case ACTION_TYPES.SET_DEALER_FAILED:
            return {...state, loader:false}
        
        case ACTION_TYPES.EDIT_DEALER_PROFILE_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.EDIT_DEALER_PROFILE_SUCCESS:
            return {...state, dealer: action.payload,loader:false}
        case ACTION_TYPES.EDIT_DEALER_PROFILE_FAILED:
            return {...state, loader:false}

    //--------------------------------------------------------Dealer Car Api
     
        case ACTION_TYPES.FETCH_DEALER_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FETCH_DEALER_CAR_SUCCESS:
            return {...state, dealerCars: action.payload,loader:false}
        case ACTION_TYPES.FETCH_DEALER_CAR_FAILED:
            return {...state, loader:false}
 
        case ACTION_TYPES.SET_DEALER_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.SET_DEALER_CAR_SUCCESS:
            return {...state, Car: action.payload,loader:false}
        case ACTION_TYPES.SET_DEALER_CAR_FAILED:
            return {...state, loader:false}
        
        case ACTION_TYPES.FETCH_ALL_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FETCH_ALL_CAR_SUCCESS:
            return {...state, Cars: action.payload,loader:false}
        case ACTION_TYPES.FETCH_ALL_CAR_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES.ADD_DEALER_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.ADD_DEALER_CAR_SUCCESS:
            return {...state,loader:false}
        case ACTION_TYPES.ADD_DEALER_CAR_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES. DELETE_DEALER_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES. DELETE_DEALER_CAR_SUCCESS:
            return {...state,loader:false}
        case ACTION_TYPES. DELETE_DEALER_CAR_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES. EDIT_DEALER_CAR_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES. EDIT_DEALER_CAR_SUCCESS:
            return {...state,loader:false}
        case ACTION_TYPES. EDIT_DEALER_CAR_FAILED:
        default:
            return state
    }

}