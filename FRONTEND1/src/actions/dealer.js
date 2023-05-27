import { ACTION_TYPES } from "../constants/actionTypes";
import { NotificationManager } from 'react-notifications';
import localStorage from "redux-persist/es/storage";
import { addDealerCar, deleteCar, editDealerProfile, fetchAllCars, fetchDealerProfile, login, register, resetPassword } from "../API";

export const dealerSignup = (res, navigate)=> async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.DEALER_REGISTER_REQUEST})
        localStorage.setItem("roleType","dealer")
        const response = await register(res)
        dispatch({type:ACTION_TYPES.DEALER_REGISTER_SUCCESS, payload: {}})
        NotificationManager.success("Registration Success, please login now!")
        navigate("/login")
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.DEALER_REGISTER_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const dealerLogin = (res, navigate)=> async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.DEALER_LOGIN_REQUEST})
        localStorage.setItem("roleType","dealer")
        const {data} = await login(res)
        dispatch({type:ACTION_TYPES.DEALER_LOGIN_SUCCESS, payload: data.data})
        NotificationManager.success("Login Success")
        navigate("/")
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.DEALER_LOGIN_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}


export const dealerLogout =()=>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.DEALER_LOGOUT_REQUEST})
        dispatch({type:ACTION_TYPES.DEALER_LOGOUT_SUCCESS, payload: {}})
        NotificationManager.success("Logout Success")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.DEALER_LOGOUT_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }

}

export const getDealerProfile =()=>async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.FETCH_DEALER_PROFILE_REQUEST})
        const { data } = await fetchDealerProfile()
        dispatch({type:ACTION_TYPES.FETCH_DEALER_PROFILE_SUCCESS, payload:data.data}) 
        NotificationManager.success("Your profile is fetched!")       
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.FETCH_DEALER_PROFILE_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const editProfile =(res, navigate)=>async(dispatch, getState)=>{

    try{
        dispatch({type:ACTION_TYPES.EDIT_DEALER_PROFILE_REQUEST})
        const {data} = await editDealerProfile(res)
        dispatch({type:ACTION_TYPES.EDIT_DEALER_PROFILE_SUCCESS, payload: data.data})
        if(data.status === "success"){
            NotificationManager.success("Profile edit successfully")
            navigate("/dealerHomePage")           
        }
        dispatch(getDealerProfile())
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.FETCH_DEALER_PROFILE_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const resetDealerPassword = async(res, navigate)=>async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.DEALER_RESETPASSWORD_REQUEST})
        const {data} = await resetPassword(res)
        dispatch({type:ACTION_TYPES.DEALER_RESETPASSWORD_SUCCESS})
        NotificationManager.success(data.msg ? data.msg : "password reset successfully!")
        navigate("/dealerHomePage")
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.DEALER_RESETPASSWORD_FAILED})
        NotificationManager.error(err?.response ? err?.response?.data?.msg : err.message)
    }
}

export const addCar =(res, navigate, location)=>async(dispatch)=>{
    try{
        dispatch({type: ACTION_TYPES.ADD_DEALER_CAR_REQUEST})
        const {data} = await addDealerCar(res)
        dispatch({type: ACTION_TYPES.ADD_DEALER_CAR_SUCCESS, payload: data.data})
        NotificationManager.success("Car added successfully")
        navigate("/dealerCars")       
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.ADD_DEALER_CAR_FAILED})
        NotificationManager.error(err.response ? err.response.data.error : err.message)
    }
}

export const getAllCars =(res)=>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.FETCH_ALL_CAR_REQUEST})
        const {data} = await fetchAllCars(res)
        dispatch({type: ACTION_TYPES.FETCH_ALL_CAR_SUCCESS, payload:data.data})
        NotificationManager.success("All Cars fetch successfully")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.FETCH_ALL_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}

export const setDealerCar = (res) =>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.SET_DEALER_CAR_REQUEST})
        dispatch({type:ACTION_TYPES.SET_DEALER_CAR_SUCCESS,payload:res})
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.SET_DEALER_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}

export const editDealerCar = (res, navigate) =>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.EDIT_DEALER_CAR_REQUEST})
        const { Car } = getState().dealer
        const { data } = await editCar(Car._id,res)
        dispatch({type:ACTION_TYPES.EDIT_DEALER_CAR_SUCCESS})
        NotificationManager.success("Car edit successfully")
        navigate("/dealerCars")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.EDIT_DEALER_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}

export const deleteDealerCar =(res) =>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.DELETE_DEALER_CAR_REQUEST})
        const {data} = await deleteCar(res)
        dispatch({type: ACTION_TYPES.DELETE_DEALER_CAR_SUCCESS})
        NotificationManager.success("Car delete successfully")
        dispatch(getAllCars())
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.DELETE_DEALER_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}