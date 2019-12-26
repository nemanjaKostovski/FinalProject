import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { routerMiddleware } from "connected-react-router/immutable";
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

const configureStore = (history) => {
  const routerMiddlewaree = routerMiddleware(history);

  const middlewares = [routerMiddlewaree, thunk];
  const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(...middlewares))
  );
  return store;
};

// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
// );

// export default store; 
export default configureStore;