import Fetch from 'controllers/fetch';

/**
 * 카테고리 목록 호출 API
 * @version 1
 */
export const getCategoryList = () => {
  return Fetch('/api/categories', 'GET').then(res => {
    if (res) return res;
    else return Promise.reject(res);
  });
};

/**
 * 브랜드 목록 호출 API
 * @version 1
 */
export const getBrandList = () => {
  return Fetch('/api/brands', 'GET').then(res => {
    if (res) return res;
    else return Promise.reject(res);
  });
};
