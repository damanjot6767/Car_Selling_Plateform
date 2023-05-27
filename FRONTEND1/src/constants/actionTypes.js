export const ACTION_TYPES = {
  //--------------------------------------------------------------------------Dealer Action Type
    DEALER_LOGIN_REQUEST: 'DEALER_LOGIN_REQUEST',
    DEALER_LOGIN_SUCCESS: "DEALER_LOGIN_SUCCESS",
    DEALER_LOGIN_FAILED: "DEALER_LOGIN_FAILED",

    DEALER_LOGOUT_REQUEST: 'DEALER_LOGOUT_REQUEST',
    DEALER_LOGOUT_SUCCESS: "DEALER_LOGOUT_SUCCESS",
    DEALER_LOGOUT_FAILED: "DEALER_LOGOUT_FAILED",

    DEALER_RESETPASSWORD_REQUEST: 'DEALER_RESETPASSWORD_REQUEST',
    DEALER_RESETPASSWORD_SUCCESS: "DEALER_RESETPASSWORD_SUCCESS",
    DEALER_RESETPASSWORD_FAILED: "DEALER_RESETPASSWORD_FAILED",

    FETCH_DEALER_PROFILE_REQUEST: 'FETCH_DEALER_PROFILE_REQUEST',
    FETCH_DEALER_PROFILE_SUCCESS: 'FETCH_DEALER_PROFILE_SUCCESS',
    FETCH_DEALER_PROFILE_FAILED : 'FETCH_DEALER_PROFILE_FAILED',

    SET_DEALER_REQUEST: 'SET_DEALER_REQUEST',
    SET_DEALER_SUCCESS: 'SET_DEALER_SUCCESS',
    SET_DEALER_FAILED: 'SET_DEALER_FAILED',

    EDIT_DEALER_PROFILE_REQUEST: 'EDIT_DEALER_PROFILE_REQUEST',
    EDIT_DEALER_PROFILE_SUCCESS: 'EDIT_DEALER_PROFILE_SUCCESS',
    EDIT_DEALER_PROFILE_FAILED : 'EDIT_DEALER_PROFILE_FAILED',

 //--------------------------------------------------------------------------User Action Type
    USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAILED: "USER_LOGIN_FAILED",

    USER_LOGOUT_REQUEST: 'USER_LOGOUT_REQUEST',
    USER_LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS",
    USER_LOGOUT_FAILED: "USER_LOGOUT_FAILED",

    USER_RESETPASSWORD_REQUEST: 'USER_RESETPASSWORD_REQUEST',//important for functional call only
    USER_RESETPASSWORD_SUCCESS: "USER_RESETPASSWORD_SUCCESS",
    USER_RESETPASSWORD_FAILED: "USER_RESETPASSWORD_FAILED",

    FETCH_USER_PROFILE_REQUEST: 'FETCH_USER_PROFILE_REQUEST',
    FETCH_USER_PROFILE_SUCCESS: 'FETCH_USER_PROFILE_SUCCESS',
    FETCH_USER_PROFILE_FAILED : 'FETCH_USER_PROFILE_FAILED',

    SET_USER_REQUEST: 'SET_USER_REQUEST',
    SET_USER_SUCCESS: 'SET_USER_SUCCESS',
    SET_USER_FAILED: 'SET_USER_FAILED',

    EDIT_USER_PROFILE_REQUEST: 'EDIT_USER_PROFILE_REQUEST',
    EDIT_USER_PROFILE_SUCCESS: 'EDIT_USER_PROFILE_SUCCESS',
    EDIT_USER_PROFILE_FAILED : 'EDIT_USER_PROFILE_FAILED',

 //--------------------------------------------------------------------------Dealer Car Action Type
    ADD_DEALER_CAR_REQUEST: 'ADD_DEALER_CAR_REQUEST',
    ADD_DEALER_CAR_SUCCESS: 'ADD_DEALER_CAR_SUCCESS',
    ADD_DEALER_CAR_FAILED: 'ADD_DEALER_CAR_FAILED',//import for functional call

    FETCH_DEALER_CAR_REQUEST: 'FETCH_DEALER_CAR_REQUEST',
    FETCH_DEALER_CAR_SUCCESS: 'FETCH_DEALER_CAR_SUCCESS',
    FETCH_DEALER_CAR_FAILED: 'FETCH_DEALER_CAR_FAILED',

    EDIT_DEALER_CAR_REQUEST: 'EDIT_DEALER_CAR_REQUEST',//important for functional call only
    EDIT_DEALER_CAR_SUCCESS: 'EDIT_DEALER_CAR_SUCCESS',
    EDIT_DEALER_CAR_FAILED: 'EDIT_DEALER_CAR_FAILED',

    SET_DEALER_CAR_REQUEST: 'SET_DEALER_CAR_REQUEST',
    SET_DEALER_CAR_SUCCESS: 'SET_DEALER_CAR_SUCCESS',
    SET_DEALER_CAR_FAILED: 'SET_DEALER_CAR_FAILED',

    DELETE_DEALER_CAR_REQUEST: 'DELETE_DEALER_CAR_REQUEST',//important for functional call only
    DELETE_DEALER_CAR_SUCCESS: 'DELETE_DEALER_CAR_SUCCESS',
    DELETE_DEALER_CAR_FAILED: 'DELETE_DEALER_CAR_FAILED',

    FETCH_ALL_CAR_REQUEST: 'FEATCH_ALL_CAR_REQUEST',
    FETCH_ALL_CAR_SUCCESS: 'FETCH_ALL_CAR_SUCCESS',
    FETCH_ALL_CAR_FAILED: 'FETCH_ALL_CAR_FAILED',


//--------------------------------------------------------------------------User Car Action Type
    FILTER_USER_CAR_REQUEST:'FILTER_USER_CAR_REQUEST',
    FILTER_USER_CAR_SUCCESS: 'FILTER_USER_CAR_SUCCESS',
    FILTER_USER_CAR_FAILED: 'FILTER_USER_CAR_FAILED',

    BUY_USER_CAR_REQUEST:'BUY_USER_CAR_REQUEST',//for functional use only
    BUY_USER_CAR_SUCCESS: 'BUY_USER_CAR_SUCCESS',
    BUY_USER_CAR_FAILED: 'BUY_USER_CAR_FAILED',

    USER_FETCH_ALL_CAR_REQUEST: 'USER_FEATCH_ALL_CAR_REQUEST',
    USER_FETCH_ALL_CAR_SUCCESS: 'USER_FETCH_ALL_CAR_SUCCESS',
    USER_FETCH_ALL_CAR_FAILED: 'USER_FETCH_ALL_CAR_FAILED',

//--------------------------------------------------------------------------Species Car Action Type

   FETCH_SPECIES_REQUEST:'FETCH_SPECIES_REQUEST',
   FETCH_SPECIES_SUCCESS:'FETCH_SPECIES_SUCCESS',
   FETCH_SPECIES_FAILED:'FETCH_SPECIES_FAILED',

   FILTER_SPECIES_REQUEST:'FILTER_SPECIES_REQUEST',
   FILTER_SPECIES_SUCCESS:'FILTER_SPECIES_SUCCESS',
   FILTER_SPECIES_FAILED:'FILTER_SPECIES_FAILED',
}