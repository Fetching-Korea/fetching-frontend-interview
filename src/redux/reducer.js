import {
    SET_CATEGORY,
    SET_BOOKMARK,
    SET_FILTER,
    FETCH_SMALLCATEGORIES_FAILURE,
    FETCH_SMALLCATEGORIES_REQUEST,
    FETCH_SMALLCATEGORIES_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
} from './action';

const initialState = {
    category: [0, 14, -1],
    smallCategories: [],
    products: [],
    bookmark: {},
    filter: {
        brandIdList: [],
        minimumPrice: 0,
        maximumPrice: 100000000,
        sort: 0,
    },

    loading: false,
    err: null,
}
export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        case SET_BOOKMARK:
            return {
                ...state,
                bookmark: action.payload
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            }


        case FETCH_SMALLCATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SMALLCATEGORIES_SUCCESS:
            return {
                ...state,
                smallCategories: action.payload,
                loading: false,
            }
        case FETCH_SMALLCATEGORIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }


        default: return state;
    }
}