import { ACTION_TYPES } from "../constants/actionTypes";
import { NotificationManager } from 'react-notifications';
import localStorage from "redux-persist/es/storage";
import { AllCars, editUserProfile,fetchUserProfile, login, register, resetPassword, userBuyCar, userFilterCar } from "../API";

export const userSignup = (res, navigate)=> async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.USER_REGISTER_REQUEST})
        localStorage.setItem("roleType",res.role)
        const response = await register(res)
        dispatch({type:ACTION_TYPES.USER_REGISTER_SUCCESS, payload: {}})
        NotificationManager.success("Registration Success, please login now!")
        navigate("/")
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.USER_REGISTER_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const userLogin = (res, navigate)=> async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.USER_LOGIN_REQUEST})
        localStorage.setItem("roleType",res.role)
        const {data} = await login(res)
        dispatch({type:ACTION_TYPES.USER_LOGIN_SUCCESS, payload: data.data})
        NotificationManager.success("Login Success")
        navigate("/")
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.USER_LOGIN_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}


export const userLogout =(navigate)=>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.USER_LOGOUT_REQUEST})
        dispatch({type:ACTION_TYPES.USER_LOGOUT_SUCCESS, payload: {}})
        NotificationManager.success("Logout Success")
        navigate("/signup")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.USER_LOGOUT_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }

}

export const getUserProfile =()=>async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.FETCH_USER_PROFILE_REQUEST})
        const { data } = await fetchUserProfile()
        dispatch({type:ACTION_TYPES.FETCH_USER_PROFILE_SUCCESS, payload:data.data}) 
        NotificationManager.success("Your profile is fetched!")       
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.FETCH_USER_PROFILE_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const editProfile =(res, navigate)=>async(dispatch, getState)=>{

    try{
        dispatch({type:ACTION_TYPES.EDIT_USER_PROFILE_REQUEST})
        const {data} = await editUserProfile(res)
        dispatch({type:ACTION_TYPES.EDIT_USER_PROFILE_SUCCESS, payload: data.data})
        if(data.status === "success"){
            NotificationManager.success("Profile edit successfully")
            navigate("/userHomePage")           
        }
        dispatch(getUserProfile())
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.FETCH_USER_PROFILE_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const resetUserPassword = async(res, navigate)=>async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.USER_RESETPASSWORD_REQUEST})
        const {data} = await resetPassword(res)
        dispatch({type:ACTION_TYPES.USER_RESETPASSWORD_SUCCESS})
        NotificationManager.success(data.msg ? data.msg : "password reset successfully!")
        navigate("/userHomePage")
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.USER_RESETPASSWORD_FAILED})
        NotificationManager.error(err?.response ? err?.response?.data?.msg : err.message)
    }
}


export const getAllCars =()=>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.USER_FETCH_ALL_CAR_REQUEST})
        const {data} = await AllCars()
        dispatch({type: ACTION_TYPES.USER_FETCH_ALL_CAR_SUCCESS, payload:data.data})
        NotificationManager.success("All Cars fetch successfully")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.USER_FETCH_ALL_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}

export const buyCar =(res)=>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.BUY_USER_CAR_REQUEST})
        const {data} = await userBuyCar(res)
        dispatch({type: ACTION_TYPES.BUY_USER_CAR_SUCCESS, payload:data.data})
        NotificationManager.success("Car Buy successfully")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.BUY_USER_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}

export const filterCar =(res)=>async(dispatch, getState)=>{
    try{
        dispatch({type: ACTION_TYPES.FILTER_USER_CAR_REQUEST})
        const {data} = await userFilterCar(res)
        dispatch({type: ACTION_TYPES.FILTER_USER_CAR_SUCCESS, payload:data.data})
        NotificationManager.success("Filter Cars fetch successfully")
    }
    catch(err){
        console.log(err.message);
        dispatch({type:ACTION_TYPES.FILTER_USER_CAR_FAILED})
        NotificationManager.error(err.message)
    }
}

