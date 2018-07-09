import isEmpty from 'is-empty-object';
import query from 'query-string';
import { concatLinks } from './';

/**
 * A wrapper around the Jsonplaceholder API for convenient requests
 */
export class ApiClass {
  static URL = 'http://jsonplaceholder.typicode.com';

  static defaultOptions = {
    url: '/',
    data: {},
    dataType: 'json',
    fetchOptions: {
      cache: 'no-cache',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    },
    onResponse: () => null,
    onReject: () => null,
  };

  makeRequest(url, options) {
    const responseMiddleware = res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch data from server (${res.status} ${res.statusText})`);
      }
      return res.json();
    };

    return fetch(url, options.fetchOptions)
      .then(responseMiddleware)
      .then(options.onResponse)
      .catch(options.onReject);
  }

  /**
   * Sends GET-request
   * -------------
   * Example:
   * Api.get({
   *    url: '/posts',
   *    onResponse: res => {},
   *    onReject: err => {},
   * });
   * -------------
   * @param requestOptions - request options
   * @return {Promise} - result of Api.makeRequest()
   */
  get(requestOptions) {
    const options = {
      ...ApiClass.defaultOptions,
      ...requestOptions,
    };
    const createURL = () => {
      const queryString = isEmpty(options.data) ? '' : `?${query.stringify(options.data)}`;
      return ApiClass.URL + concatLinks(options.url, queryString);
    };

    return this.makeRequest(createURL(), options);
  }

  /**
   * Sends POST-request
   * -------------
   * Example:
   * Api.post({
   *    url: '/',
   *    data: {},
   *    onResponse: res => {},
   *    onReject: err => {},
   * });
   * -------------
   * @param requestOptions - request options
   * @return {Promise} - result of Api.makeRequest()
   */
  post(requestOptions) {
    const options = {
      ...ApiClass.defaultOptions,
      ...requestOptions,
      fetchOptions: {
        ...requestOptions.fetchOptions,
        method: 'POST',
        body:
          requestOptions.dataType === 'json'
            ? JSON.stringify(requestOptions.data)
            : requestOptions.data,
      },
    };

    return this.makeRequest(ApiClass.URL + options.url, options);
  }
}

export default new ApiClass();
