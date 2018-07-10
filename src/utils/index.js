import random from 'random-int';

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

export const getRandomPicsumImage = (id, width = 640, height = 480) => {
  return `https://picsum.photos/${width}/${height}?image=${id}`;
};

export const bindRandomImageToPost = post => {
  const imageId = random(0, 20);
  return {
    ...post,
    preview: getRandomPicsumImage(imageId, 1200, 800),
    thumb: getRandomPicsumImage(imageId, 640, 480),
  };
};

export const bindRandomImageToPosts = posts => {
  return posts.map(post => bindRandomImageToPost(post));
};

export const getCachedStore = () => {
  return JSON.parse(sessionStorage.getItem('cached_store'));
};
