import produce from 'immer';
// controllers
import * as productAPI from 'controllers/product';

/*
	Thunk Actions
*/
export const getProductList = id => (dispatch, getState) => {
  const state = getState().product;

  const categoryId = id
    ? id
    : state.options.categoryIdList.length > 0
    ? state.options.categoryIdList[state.options.categoryIdList.length - 1]
    : null;
  if (!categoryId) return Promise.reject();

  return productAPI
    .getItems(
      state.bookmark,
      categoryId,
      state.options.minimumPrice,
      state.options.maximumPrice,
      state.options.sort,
      true,
    )
    .then(res => {
      dispatch(
        setProductInfo({
          count: res.count ? res.count : 0,
          pageNum: res.page ? res.page : 0,
        }),
      );
      dispatch(setBookmark(res.bookmark));
      dispatch(pushProductList(res.results));

      // 더 이상 호출할 필요가 없을 경우, Check
      if (res.results.length === 0) {
        dispatch(setIslast(true));
      } else {
        dispatch(setIslast(false));
      }
    });
};

/*
	Actions
*/
const SET_IS_LAST = 'product/SET_IS_LAST';
const PUSH_PRODUCT_LIST = 'product/PUSH_PRODUCT_LIST';
const CLEAR_PRODUCT_LIST = 'product/CLEAR_PRODUCT_LIST';
const SET_PRODUCT_OPTIONS = 'product/SET_PRODUCT_OPTIONS';
const SET_PRODUCT_INFO = 'product/SET_PRODUCT_INFO';
const SET_PRODUCT_SELECTED = 'product/SET_PRODUCT_SELECTED';
const SET_BOOKMARK = 'product/SET_BOOKMARK';

export const setIslast = bool => ({ type: SET_IS_LAST, payload: bool });
export const pushProductList = data => ({ type: PUSH_PRODUCT_LIST, payload: data });
export const clearProductList = () => ({ type: CLEAR_PRODUCT_LIST });
export const setProductOptions = option => ({
  type: SET_PRODUCT_OPTIONS,
  payload: option,
});
export const setProductInfo = info => ({ type: SET_PRODUCT_INFO, payload: info });
export const setProductSelected = selected => ({
  type: SET_PRODUCT_SELECTED,
  payload: selected,
});
export const setBookmark = bookmark => ({ type: SET_BOOKMARK, payload: bookmark });

/**
 * InitialState
 * @param {boolean} isLast 페이지네이션 마지막 여부
 * @param {Product[]} productList 상품 목록
 * @param {object} info 기타 정보
 * @param {number} info.count 상품 목록 총 개수
 * @param {number} info.pageNum 상품 목록 현재 페이지
 * @param {object} options 옵션
 * @param {number[]} options.categoryIdList 카테고리 ID 리스트
 * @param {(number | null)} options.brandIdList: 브랜드 ID 리스트
 * @param {(number | null)} options.minimumPrice 최소 가격
 * @param {(number | null)} options.maximumPrice 최대 가격
 * @param {(0 | 1 | 2 | 3)} options.sort 정렬 기준 (0: 최신순, 1: 할인율, 2: 낮은 가격, 3: 높은 가격)
 * @param {object} selected 필터링 선택 정보
 * @param {object[]} selected.brandList 브랜드 선택 정보
 * @param {object[]} selected.price 가격 선택 정보
 * @param {object} bookmark 페이지네이션 북마크 (어느 데이터까지 받아 왔는지 알 수 있는 정보)
 */
const initialState = {
  isLast: false,
  productList: [],
  info: {
    count: 0,
    pageNum: 0,
  },
  options: {
    categoryIdList: [],
    brandIdList: [],
    minimumPrice: 0,
    maximumPrice: 999_999_999_999,
    sort: 0,
  },
  selected: {
    brandList: [],
    price: null,
  },
  bookmark: {},
};

/*
	Reducer
*/
function product(state = initialState, action) {
  switch (action.type) {
    /* Set isLast */
    case SET_IS_LAST:
      return product(state, draft => {
        draft.isLast = action.payload;
      });

    /* Push productList */
    case PUSH_PRODUCT_LIST:
      return produce(state, draft => {
        draft.productList.push(...action.payload);
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

    /* Set product information */
    case SET_PRODUCT_INFO:
      return produce(state, draft => {
        draft.info = { ...state.info, ...action.payload };
      });

    /* Set product selected */
    case SET_PRODUCT_SELECTED:
      return produce(state, draft => {
        draft.selected = { ...state.selected, ...action.payload };
      });

    /* Set bookmark */
    case SET_BOOKMARK:
      return produce(state, draft => {
        draft.bookmark = action.payload;
      });

    default:
      return state;
  }
}

export default product;
