// Utils
import Api from '../../utils/api';

// Action names
export const FETCH = '@user/FETCH';
export const FETCH_OK = '@user/FETCH_OK';
export const FETCH_ERR = '@user/FETCH_ERR';

// Action creators
const userFetchStart = () => {
  return { type: FETCH };
};

const userFetchOk = data => ({
  type: FETCH_OK,
  payload: data,
});

const userFetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const userFetch = id => (dispatch, getState) => {
  dispatch(userFetchStart());

  return Api.get({
    url: `/users/${id}`,
    onResponse: res => {
      dispatch(userFetchOk(res));
    },
    onReject: err => {
      dispatch(userFetchErr(err));
    },
  });
};

// Reducer
const initialState = {
  data: {},
  isFetching: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
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
