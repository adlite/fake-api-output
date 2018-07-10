// Vendor
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { cacheStore } from './middleware';
import rootReducer from './reducers';

const middleware = [thunk, cacheStore];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middleware));
