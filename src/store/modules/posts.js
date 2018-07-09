// Imports
import Api from '../../utils/api';

// Action types
export const FETCH = '@posts/FETCH';
export const FETCH_OK = '@posts/FETCH_OK';
export const FETCH_ERR = '@posts/FETCH_ERR';

// Action creators
const postsFetchStart = () => {
  return { type: FETCH };
};

const postsFetchOk = data => ({
  type: FETCH_OK,
  payload: data,
});

const postsFetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const postsFetch = () => dispatch => {
  dispatch(postsFetchStart());

  return Api.get({
    url: '/posts',
    onResponse: res => {
      dispatch(postsFetchOk(res));
    },
    onReject: err => {
      dispatch(postsFetchErr(err));
    },
  });
};

// Reducer
const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
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
};
