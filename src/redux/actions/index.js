import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  GET_TOPICS_FAILURE,
  GET_TOPICS_SUCCESS
} from './actionTypes';

import { 
  register,
  login,
  getTopics
} from "../../utils/services";

export const getTopicsAction = () => async dispatch => {
  try {
    const response = await getTopics();
    console.log(response);
    if(response.success)
      return dispatch({type: GET_TOPICS_SUCCESS, payload: response.topics});
    else 
      return dispatch({type: GET_TOPICS_FAILURE, payload: response.message});

  } catch (err) {
    dispatch({type: GET_TOPICS_FAILURE, payload: err.message || "Unknown error occured while fetching topics!"})
  }
}

export const loginAction = (data, history) => async dispatch => {
  dispatch({type: LOGIN_START});
  try {
    const response = await login(data);

    console.log(response.user);
    if(response.success)
      return dispatch({type: LOGIN_SUCCESS, payload: response.user})
    else 
      return dispatch({type: LOGIN_FAILURE, payload: response.message})

  } catch (err) {
    return dispatch({type: LOGIN_FAILURE, payload: err.message || "Unknown Error"});
  }
}

export const registerAction =  (data, history) => async (dispatch) => {
  try {  
    dispatch({type: LOGIN_START});

    if(data.password !== data.confirmPassword)
      return dispatch({type: REGISTER_FAILURE, payload: "Passwords don't match."})

    let response = await register(data);

    if(!response.success)
      return dispatch({type: REGISTER_FAILURE, payload: response.message});
    else 
      return dispatch({type: REGISTER_SUCCESS, payload: response.user}) && history.push("/")

  } catch (err) {
    return dispatch({type: REGISTER_FAILURE, payload: err.message || "Unknown Error"});
  }
}

export const logoutAction = () => ({type: LOGOUT});