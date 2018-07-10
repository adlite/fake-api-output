// Vendor
import { combineReducers } from 'redux';
// Reducers
import postsReducer from './modules/posts';
import postReducer from './modules/post';
import userReducer from './modules/user';
import uiReducer from './modules/ui';

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
  user: userReducer,
  ui: uiReducer,
});
