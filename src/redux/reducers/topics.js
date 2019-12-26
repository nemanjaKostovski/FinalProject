import { 
  GET_TOPICS_FAILURE,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_START
} from '../actions/actionTypes';

const initialState = {
  topics: null,
  error: null,
  inProgress: false,
  chosenTopic: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TOPICS_FAILURE: 
      return {...initialState, error: action.payload};
      
    case GET_TOPICS_START: 
      return {...initialState, inProgress: true};
    
    case GET_TOPICS_SUCCESS:
      return {...initialState, topics: action.payload};

    default: 
      return state;
  }
}