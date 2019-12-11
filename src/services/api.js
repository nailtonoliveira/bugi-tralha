import axios from 'axios';

/**
 * We are using a proxy to overrides the localhost address with the API address.
 * If CORS is enabled, then we should remove proxy from package.json and configure
 * the baseURL here.
 */
export const api = axios.create({});
// export const api = axios.create({ baseURL: 'http://vtinova.sgrede.com:9000' });

/**
 * API helper to construct request
 */
export class ApiHelper {
  /**
   * Typedefs to limit params type
   *
   * @typedef { "=" | "gt" | "gte" | "lt" | "lte" | "contains" | "startswith" | "null" } Options
   * @typedef { "asc" | "desc" } Sort
   *
   */

  constructor() {
    this._filters = {};
    this._sorts = {};
    this._pagination = {};
    this._headers = {};
    this._onUpload = null;
  }

  /**
   * This method is used to configure a filter to the
   * request that will be executed by this instance.
   *
   * @param {string} name - the name of column defined in database model
   * @param {Options} operator - the operation defined by api to filter data
   * @param {string} value - the value to compare and filter data
   *
   * @return API - the value returned is yourself instance changed
   */
  addFilter = (name, operator, value) => {
    const key = operator === '=' ? name : `${name}__${operator}`;
    this._filters[key] = value;
    return this;
  };

  /**
   * This method is used to define the sort of data from
   * request that will be executed by this instance.
   *
   * @param {string} name - the name of column defined in database model that will be sorted
   * @param {Sort} [direction='asc'] - the direction will set the ascending or descrescent order
   *
   * @return API - the value returned is yourself instance changed
   */
  addSort = (name, direction = 'asc') => {
    if ('__sort' in this._sorts)
      this._sorts.__sort = `${this._sorts.__sort},${
        direction === 'asc' ? name : `-${name}`
      }`;
    else this._sorts.__sort = direction === 'asc' ? name : `-${name}`;

    return this;
  };

  /**
   * This method is used to define the pagination to the data of
   * request that will be executed by this instance.
   *
   * @param {number} offset - the offset of data that has loaded
   * @param {number} limit - the limit quantity of the data that will be retrieve
   *
   * @return API - the value returned is yourself instance changed
   */
  addPagination = (offset, limit) => {
    this._pagination.__offset = offset;
    this._pagination.__limit = limit;

    return this;
  };

  /**
   * This method is used to add a header on
   * request that will be executed by this instance.
   *
   * @param {string} key - the header name
   * @param {string} value - the value of header
   *
   * @return API - the value returned is yourself instance changed
   */
  addHeader = (key, value) => {
    this._headers[key] = value;
    return this;
  };

  /**
   * This method is used to add a function callback upload file to
   * request that will be executed by this instance.
   *
   * @param {function} onUploadProgress - the function that will be called when upload progress was updated
   *
   * @return API - the value returned is yourself instance changed
   */
  addOnUploadProgress = onUploadProgress => {
    this._onUpload = onUploadProgress;
    return this;
  };

  /**
   * Method to merge all configs
   * */
  fullConfig = () => {
    return {
      params: {
        ...this._filters,
        ...this._sorts,
        ...this._pagination,
      },
      headers: {
        ...this._headers,
      },
      onUploadProgress: this._onUpload,
    };
  };
}
