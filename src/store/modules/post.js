// Utils
import _get from 'lodash.get';
import Api from '../../utils/api';
import { bindRandomImageToPost, getCachedStore } from '../../utils';
import { setCacheMark } from './ui';

// Action names
export const FETCH = '@post/FETCH';
export const FETCH_OK = '@post/FETCH_OK';
export const FETCH_ERR = '@post/FETCH_ERR';

// Action creators
const postFetchStart = () => {
  return { type: FETCH };
};

const postFetchOk = data => ({
  type: FETCH_OK,
  payload: bindRandomImageToPost(data),
});

const postFetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const postFetch = id => dispatch => {
  dispatch(postFetchStart());
  dispatch(setCacheMark(false));

  return Api.get({
    url: `/posts/${id}`,
    data: {
      _expand: 'user',
    },
    onResponse: res => {
      dispatch(postFetchOk(res));
    },
    onReject: err => {
      dispatch(postFetchErr(err));
    },
  });
};

// TODO: check 404 errors with caching
export const postFetchIfNeeded = id => dispatch => {
  const cachedStore = getCachedStore();
  const isDataCached = Number(_get(cachedStore, 'state.post.data.id', null)) === Number(id);

  if (isDataCached) {
    dispatch(postFetchOk(cachedStore.state.post.data));
  } else {
    dispatch(postFetch(id));
  }
  dispatch(setCacheMark(isDataCached));
};

// Reducer
const initialState = {
  data: {},
  isFetching: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_OK:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCH_ERR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
