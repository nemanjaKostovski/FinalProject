import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  user: null,
  isAuthenticated: false,
  registerError: null,
  loginError: null,
  inProgress: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return { ...initialState, inProgress: true };

    case LOGIN_SUCCESS: 
      return {...initialState, isAuthenticated: true, user: action.payload};

    case LOGIN_FAILURE: 
      return {...initialState, loginError: action.payload, inProgress: false}

    case REGISTER_SUCCESS: 
      return {...initialState, isAuthenticated: true, user: action.payload};

    case REGISTER_FAILURE: 
      return {...initialState, registerError: action.payload, inProgress: false}

    case LOGOUT: 
      return initialState;

    default: 
      return state;
  }
}