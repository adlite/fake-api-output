// Imports
import { bindRandomImageToPosts, getCachedStore } from '../../utils';
import Api from '../../utils/api';
import _get from 'lodash.get';

// Action types
export const FETCH = '@posts/FETCH';
export const FETCH_OK = '@posts/FETCH_OK';
export const FETCH_ERR = '@posts/FETCH_ERR';
export const FETCH_NEXT = '@posts/FETCH_NEXT';
export const FETCH_NEXT_OK = '@posts/FETCH_NEXT_OK';
export const FETCH_NEXT_ERR = '@posts/FETCH_NEXT_ERR';
export const BLOCK_LOAD_MORE = '@posts/BLOCK_LOAD_MORE';
export const SET_NEXT_PAGE = '@posts/SET_NEXT_PAGE';

const POSTS_PER_PAGE = 20;

// Action creators
const postsFetchStart = () => {
  return { type: FETCH };
};

const postsFetchOk = data => ({
  type: FETCH_OK,
  payload: bindRandomImageToPosts(data),
});

const postsFetchErr = err => ({
  type: FETCH_ERR,
  error: err,
});

export const blockLoadMore = () => ({
  type: BLOCK_LOAD_MORE,
});

export const postsFetch = () => dispatch => {
  dispatch(postsFetchStart());

  return Api.get({
    url: '/posts',
    data: {
      _page: 1,
      _limit: POSTS_PER_PAGE,
    },
    onResponse: res => {
      dispatch(postsFetchOk(res));
      if (res.length === 0) {
        dispatch(blockLoadMore());
      }
    },
    onReject: err => {
      dispatch(postsFetchErr(err));
    },
  });
};

export const postsFetchIfNeeded = () => dispatch => {
  const cachedStore = getCachedStore();
  const cachedData = _get(cachedStore, 'state.posts.data', []);

  if (cachedData.length > 0) {
    dispatch(postsFetchOk(cachedData));
    dispatch(calculateNextPage(cachedData));
  } else {
    dispatch(postsFetch());
  }
};

export const calculateNextPage = postsData => {
  const page = Math.floor(postsData.length / POSTS_PER_PAGE);
  console.log('page: ', page);

  return {
    type: SET_NEXT_PAGE,
    payload: page,
  };
};

const postsFetchNextStart = () => {
  return { type: FETCH_NEXT };
};

const postsFetchNextOk = data => ({
  type: FETCH_NEXT_OK,
  payload: bindRandomImageToPosts(data),
});

const postsFetchNextErr = err => ({
  type: FETCH_NEXT_ERR,
  error: err,
});

export const postsFetchNext = page => dispatch => {
  dispatch(postsFetchNextStart());

  return Api.get({
    url: '/posts',
    data: {
      _page: page,
      _limit: POSTS_PER_PAGE,
    },
    onResponse: res => {
      dispatch(postsFetchNextOk(res));
      if (res.length === 0) {
        dispatch(blockLoadMore());
      }
    },
    onReject: err => {
      dispatch(postsFetchNextErr(err));
    },
  });
};

// Reducer
const initialState = {
  data: [],
  nextPage: {
    page: 1,
    hasMore: true,
    isFetching: false,
    error: null,
  },
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
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
        nextPage: { ...initialState.nextPage },
      };
    case FETCH_ERR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCH_NEXT:
      return {
        ...state,
        nextPage: {
          ...state.nextPage,
          isFetching: true,
          error: null,
        },
      };
    case FETCH_NEXT_OK:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        nextPage: {
          ...state.nextPage,
          page: state.nextPage.page + 1,
          isFetching: false,
        },
      };
    case FETCH_NEXT_ERR:
      return {
        ...state,
        nextPage: {
          ...state.nextPage,
          isFetching: false,
          error: action.error,
        },
      };
    case BLOCK_LOAD_MORE:
      return {
        ...state,
        nextPage: {
          ...state.nextPage,
          hasMore: false,
        },
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        nextPage: {
          ...state.nextPage,
          page: action.payload,
        },
      };
    default:
      return state;
  }
};
