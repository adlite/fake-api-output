// Utils
import Api from '../../utils/api';

// Action names
export const FETCH = '@${TM:DUCK_NAME}/FETCH';
export const FETCH_OK = '@${TM:DUCK_NAME}/FETCH_OK';
export const FETCH_ERR = '@${TM:DUCK_NAME}/FETCH_ERR';

// Action creators
const ${TM:DUCK_NAME}FetchStart = () => {
  return { type: FETCH };
};

const ${TM:DUCK_NAME}FetchOk = data => ({
  type: FETCH_OK,
  payload: data,
});

const ${TM:DUCK_NAME}FetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const ${TM:DUCK_NAME}Fetch = () => (dispatch, getState) => {
  dispatch(${TM:DUCK_NAME}FetchStart());

  return Api.get({
    url: '/',
    onResponse: res => {
      dispatch(${TM:DUCK_NAME}FetchOk(res));
    },
    onReject: err => {
      dispatch(${TM:DUCK_NAME}FetchErr(err));
    },
  });
};

// Reducer
const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

export default function ${TM:DUCK_NAME}Reducer(state = initialState, action) {
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
