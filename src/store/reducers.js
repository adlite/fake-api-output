// Vendor
import { combineReducers } from 'redux';
// Reducers
import postsReducer from './modules/posts';

export default combineReducers({
  posts: postsReducer,
});
