import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import ProductListWrapper from 'components/productList/ProductListWrapper';
import Product from 'components/product';
// modules
import { clearProductList, getProductList } from 'modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);
  const productList = useSelector(state => state.product.productList);

  /** 상품 호출 */
  // TODO 항상 호출하는 것이 아닌, 변경됬을 때에만 호출하기
  useEffect(() => {
    if (categoryIdList.length === 0) return;

    dispatch(clearProductList());
    dispatch(getProductList());
  }, [dispatch, categoryIdList]);

  const ProductList = productList.map(product => (
    <Product
      key={product.id}
      to={`/productDetail/${product.id}`}
      product={product}
      onClick={() => {}}
    />
  ));

  return (
    <ProductListWrapper>
      <ul>{ProductList}</ul>
    </ProductListWrapper>
  );
};

export default ProductList;
