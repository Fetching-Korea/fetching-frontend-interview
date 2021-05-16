import produce from 'immer';
// controllers
import * as catlogAPI from 'controllers/catalog';

/*
	Thunk Actions
*/
export const getCategoryList = () => (dispatch, getState) => {
  const state = getState().catalog;

  if (state.categoryList.length > 0) return;

  return catlogAPI.getCategoryList().then(res => {
    if (!res) return Promise.reject();

    dispatch(setCategoryList(res));
  });
};

export const getBrandList = () => (dispatch, getState) => {
  const state = getState().catalog;

  if (state.brandList.length > 0) return;

  return catlogAPI.getBrandList().then(res => {
    if (!res) return Promise.reject();

    const result = res.reduce((acc, curr) => {
      const initial = curr.name.slice(0, 1);
      if (!acc[initial]) acc[initial] = [];
      acc[initial].push(curr);
      return acc;
    }, {});
    dispatch(setBrandList(result));
  });
};

/*
	Actions
*/
const SET_CATEGORY_LIST = 'catalog/SET_CATEGORY_LIST';
const SET_BRAND_LIST = 'catalog/SET_BRAND_LIST';

export const setCategoryList = data => ({
  type: SET_CATEGORY_LIST,
  payload: data,
});
export const setBrandList = data => ({
  type: SET_BRAND_LIST,
  payload: data,
});

/**
 * InitialState
 * @param {Category[]} categoryList 상품 카테고리 목록
 * @param {{[string]: Brand[]}} brandList 브랜드 목록
 */
const initialState = {
  categoryList: [],
  brandList: {},
};

/*
	Reducer
*/
function catalog(state = initialState, action) {
  switch (action.type) {
    /* Set categoryList */
    case SET_CATEGORY_LIST:
      return produce(state, draft => {
        draft.categoryList = action.payload;
      });

    /* Set brandList */
    case SET_BRAND_LIST:
      return produce(state, draft => {
        draft.brandList = Object.assign(draft.brandList, action.payload);
      });

    default:
      return state;
  }
}

export default catalog;
