import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import ProductListWrapper from 'components/productList/ProductListWrapper';
// modules
import { clearProductList, getProductList } from 'modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);
  const productList = useSelector(state => state.product.productList);

  /** 상품 호출 */
  useEffect(() => {
    if (categoryIdList.length === 0) return;

    dispatch(clearProductList());
    dispatch(getProductList());
  }, [dispatch, categoryIdList]);

  return <ProductListWrapper></ProductListWrapper>;
};

export default ProductList;
