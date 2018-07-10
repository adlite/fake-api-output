/**
 * Saves store in JSON to sessionStorage every time
 * when action dispatches
 */
export const cacheStore = store => next => action => {
  next(action);
  if (typeof window !== 'undefined') {
    const stateString = JSON.stringify({
      state: store.getState(),
      timestamp: Date.now(),
    });
    sessionStorage.setItem('cached_store', stateString);
  }
};
