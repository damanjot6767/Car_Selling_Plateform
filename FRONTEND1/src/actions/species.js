import { fetchSpecies, filterSpecies } from "../API";
import { ACTION_TYPES } from "../constants/actionTypes";
import { NotificationManager } from 'react-notifications';


export const getSpecies =()=>async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.FETCH_SPECIES_REQUEST})
        const { data } = await fetchSpecies()
        dispatch({type:ACTION_TYPES.FETCH_SPECIES_SUCCESS, payload:data.data})       
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.FETCH_SPECIES_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}

export const FilterSpecies =()=>async(dispatch, getState)=>{
    try{
        dispatch({type:ACTION_TYPES.FILTER_SPECIES_REQUEST})
        const { data } = await filterSpecies()
        dispatch({type:ACTION_TYPES.FILTER_SPECIES_SUCCESS, payload:data.data})       
    }
    catch(err){
        console.log(err);
        dispatch({type:ACTION_TYPES.FILTER_SPECIES_FAILED})
        NotificationManager.error(err.response ? err.response.data.msg : err.message)
    }
}