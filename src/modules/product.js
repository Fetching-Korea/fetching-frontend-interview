import produce from 'immer';
// controllers
import * as productAPI from 'controllers/product';

/*
	Thunk Actions
*/
export const getProductList = type => (dispatch, getState) => {
  const state = getState().product;

  if (state.productList.length > 0) return;

  const categoryId =
    state.options.categoryIdList.length > 0
      ? state.options.categoryIdList[state.options.categoryIdList.length - 1]
      : null;
  if (!categoryId) return;

  return productAPI
    .getItems(
      state.bookmark,
      categoryId,
      state.options.brandId,
      state.options.minimumPrice,
      state.options.maximumPrice,
      state.options.sort,
      true,
    )
    .then(res => {
      console.log(res);
      // dispatch(pushProductList(res));
    });
};

/*
	Actions
*/
const PUSH_PRODUCT_LIST = 'product/PUSH_PRODUCT_LIST';
const CLEAR_PRODUCT_LIST = 'product/CLEAR_PRODUCT_LIST';
const SET_PRODUCT_OPTIONS = 'product/SET_PRODUCT_OPTIONS';

export const pushProductList = data => ({
  type: PUSH_PRODUCT_LIST,
  payload: data,
});
export const clearProductList = () => ({ type: CLEAR_PRODUCT_LIST });
export const setProductOptions = option => ({
  type: SET_PRODUCT_OPTIONS,
  payload: option,
});

/**
 * InitialState
 * @param {Product[]} productList 상품 목록
 * @param {object} options 옵션
 * @param {number[]} options.categoryIdList 카테고리 ID
 * @param {(number | null)} options.brandId 브랜드 ID
 * @param {(number | null)} options.minimumPrice 최소 가격
 * @param {(number | null)} options.maximumPrice 최대 가격
 * @param {(0 | 1 | 2 | 3)} options.sort 정렬 기준 (0: 최신순, 1: 할인율, 2: 낮은 가격, 3: 높은 가격)
 */
const initialState = {
  productList: [],
  options: {
    categoryIdList: [],
    brandId: null,
    minimumPrice: null,
    maximumPrice: null,
    sort: 0,
  },
  bookmark: null,
};

/*
	Reducer
*/
function product(state = initialState, action) {
  switch (action.type) {
    /* Push productList */
    case PUSH_PRODUCT_LIST:
      return produce(state, draft => {
        draft.productList.push(action.payload);
      });

    /* Clear productList */
    case CLEAR_PRODUCT_LIST:
      return produce(state, draft => {
        draft.productList = [];
      });

    /* Set product options */
    case SET_PRODUCT_OPTIONS:
      return produce(state, draft => {
        draft.options = { ...state.options, ...action.payload };
      });

    default:
      return state;
  }
}

export default product;
