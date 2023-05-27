import axios from "axios";
import { validateUserType } from "../ValidateUserType";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

API.interceptors.request.use((req) => {
  try {
    if (JSON.parse(localStorage.getItem("profile")).token) {
        req.headers.Authorization = `Bearer ${ 
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  } catch (error) {
    console.error("error",error);
  }
});


API.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  if(error?.response?.data?.statusCode === 401 || error?.response?.data?.statusCode === 403 ){
    localStorage.clear()
    localStorage.removeItem('persist:root');
    window.location = `${window.location.protocol}//${window.location.host}/login`
  }

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

//------------------------------------------------------------------------------------------------Dealer Auth and User Auth
export const register = (data)=>axios.post(`${process.env.REACT_APP_API_BASE_URL}${validateUserType()?"/user/register":"/dealer/register"}`, data);
export const login = (data)=>axios.post(`${process.env.REACT_APP_API_BASE_URL}${validateUserType()?"/user/login":"/dealer/login"}`, data);
export const resetPassword =(data)=>API.post(validateUserType()?"/user/resetPassword":"/dealer/resetPassword", data)

//------------------------------------------------------------------------------------Dealer Api
export const fetchDealerProfile =()=>API.get("dealer/fetchDealer")
export const editDealerProfile =(data)=>API.put("dealer/editDealer", data)

//------------------------------------------------------------------------------------------------------Dealer Car Api
export const addDealerCar =(data)=>API.post("dealer/createCar", data)
export const fetchAllCars =()=>API.get("dealer/fetchCars")
export const deleteCar =(carId)=>API.delete(`dealer/deleteCars/${carId}`)
export const editCar =(carId, data)=>API.put(`dealer/editCar/${carId}`, data)
export const fetchCarById =(carId)=>API.get(`dealer/fetchCar/${carId}`)

//------------------------------------------------------------------------------------------------------User Api

export const fetchUserProfile =()=>API.get(`user/fetchUser`) 
export const editUserProfile =(data)=>API.put(`user/editUser`,data)
export const userBuyCar =(data)=>API.post(`user/buyCar`, data)
export const userFilterCar =(data)=>API.post(`user/filterCar`, data)
export const AllCars =()=>API.get("user/fetchCars")

//------------------------------------------------------------------------------------------------------Species Api

export const fetchSpecies =()=>API.get(`species/fetchSpecies`)
export const filterSpecies =({name,year})=>API.get(`species/filterSpecies?name=${name}&year=${year}`)
