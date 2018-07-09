// Utils
import Api from '../../utils/api';
import { bindRandomImageToPost } from '../../utils';

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
  payload: data,
});

const postFetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const postFetch = id => dispatch => {
  dispatch(postFetchStart());

  return Api.get({
    url: `/posts/${id}`,
    data: {
      _expand: 'user',
    },
    onResponse: res => {
      dispatch(postFetchOk(bindRandomImageToPost(res)));
    },
    onReject: err => {
      dispatch(postFetchErr(err));
    },
  });
};

// Reducer
const initialState = {
  data: [],
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
