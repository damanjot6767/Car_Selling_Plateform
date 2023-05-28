import { ACTION_TYPES } from "../constants/actionTypes"

const initialState = {
    oemSpecies:[],
    loader:false,
}

export const species = (state = initialState, action) =>{
    switch(action.type){

        case ACTION_TYPES.FETCH_SPECIES_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FETCH_SPECIES_SUCCESS:
            return {...state, oemSpecies: action.payload,loader:false}
        case ACTION_TYPES.FETCH_SPECIES_FAILED:
            return {...state, loader:false}

        case ACTION_TYPES.FILTER_SPECIES_REQUEST:
            return {...state, loader:true}
        case ACTION_TYPES.FILTER_SPECIES_SUCCESS:
            return {...state, oemSpecies: action.payload,loader:false}
        case ACTION_TYPES.FILTER_SPECIES_FAILED:
            return {...state, loader:false}
 
        
        default:
            return state
    }

}