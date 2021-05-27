export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_BOOKMARK = 'SET_BOOKMARK';
export const SET_FILTER = 'SET_FILTER';

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category,
    }
}
export const setBookmark = (bookmark) => {
    return {
        type: SET_BOOKMARK,
        payload: bookmark,
    }
}
export const setFilter = (filter) => {
    return {
        type:SET_FILTER,
        payload:filter,
    }
}

//////////////////////////////


export const FETCH_SMALLCATEGORIES = 'FETCH_SMALLCATEGORIES';
export const FETCH_SMALLCATEGORIES_REQUEST = 'FETCH_SMALLCATEGORIES_REQUEST';
export const FETCH_SMALLCATEGORIES_SUCCESS = 'FETCH_SMALLCATEGORIES_SUCCESS';
export const FETCH_SMALLCATEGORIES_FAILURE = 'FETCH_SMALLCATEGORIES_FAILURE';
const fetchSmallCategoriesRequest = () => {
    return {
        type: FETCH_SMALLCATEGORIES_REQUEST,
    }
}
const fetchSmallCategoriesSuccess = (smallCategories) => {
    return {
        type: FETCH_SMALLCATEGORIES_SUCCESS,
        payload: smallCategories,
    }
}
const fetchSmallCategoriesFailure = (error) => {
    return {
        type: FETCH_SMALLCATEGORIES_FAILURE,
        payload: error,
    }
}
export const fetchSmallCategories = (bigCategory) => {
    return (dispatch) => {
        dispatch(fetchSmallCategoriesRequest());
        fetch(`https://test.fetchingapp.co.kr/api/categories`)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchSmallCategoriesSuccess(data[0].children.find(v => v.id === bigCategory).children));
            })
            .catch(err => dispatch(fetchSmallCategoriesFailure(err)));
    }
}

//////////////////////////////


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}
const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    }
}
const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    }
}
export const fetchProducts = (category, filter) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        const data = {
            categoryId: category[2] === -1 ? category[1] : category[2],
            ...filter,
        }
        fetch(`https://test.fetchingapp.co.kr/api/items/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                dispatch(setBookmark(res.bookmark));
                dispatch(fetchProductsSuccess(res.results));
            })
            .catch(err => dispatch(fetchProductsFailure(err)));
    }
}
export const fetchProductsFromBookmark = (category,bookmark, products, filter) => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        const data = {
            categoryId: category[2] === -1 ? category[1] : category[2],
            bookmark,
            ...filter,
        }
        fetch(`https://test.fetchingapp.co.kr/api/items/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                dispatch(setBookmark(res.bookmark));
                dispatch(fetchProductsSuccess(products.concat(res.results)));
            })
            .catch(err => dispatch(fetchProductsFailure(err)));
    }
}


//////////////////////////////
