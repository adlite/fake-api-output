// Action names
export const SET_CACHE_MARK = '@ui/SET_CACHE_MARK';

// Action creators
export const setCacheMark = isFromCache => ({
  type: SET_CACHE_MARK,
  payload: isFromCache,
});

// Reducer
const initialState = {
  isDataFromCache: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CACHE_MARK:
      return {
        ...state,
        isDataFromCache: action.payload,
      };
    default:
      return state;
  }
}
