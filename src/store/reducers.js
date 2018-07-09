// Vendor
import { combineReducers } from 'redux';
// Reducers
import postsReducer from './modules/posts';
import postReducer from './modules/post';

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
});
