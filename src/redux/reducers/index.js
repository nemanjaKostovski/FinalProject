import { combineReducers } from 'redux';
import authentication from './authentication';
import topics from './topics';
import { connectRouter } from 'connected-react-router';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authentication,
  topics
})

export default rootReducer;