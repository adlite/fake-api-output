/**
 * Concatenate absolute and relative link to one string
 * @param parentLink
 * @param relativeLink
 * @return {string} - concatenated links
 */
export const concatLinks = (parentLink, relativeLink) => {
  if (parentLink.slice(-1) === '/') {
    return parentLink + relativeLink;
  }

  return `${parentLink}/${relativeLink}`;
};

/**
 * Invokes function with params if typeof is function
 * @param func {function} - function to be invoked
 * @param params {any} - params to pass in 'func'
 * @return {any} - returns function call result
 */
export const callFunc = (func, ...params) => {
  if (typeof func === 'function') {
    return func(...params);
  }

  return null;
};
