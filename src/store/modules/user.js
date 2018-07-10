// Utils
import Api from '../../utils/api';
import { getCachedStore } from '../../utils';
import _get from 'lodash.get';
import { setCacheMark } from './ui';

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

export const userFetch = id => dispatch => {
  dispatch(userFetchStart());
  dispatch(setCacheMark(false));

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

export const userFetchIfNeeded = id => dispatch => {
  const cachedStore = getCachedStore();
  const isDataCached = Number(_get(cachedStore, 'state.user.data.id', null)) === Number(id);

  if (isDataCached) {
    dispatch(userFetchOk(cachedStore.state.user.data));
  } else {
    dispatch(userFetch(id));
  }
  dispatch(setCacheMark(isDataCached));
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
        error: null,
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
