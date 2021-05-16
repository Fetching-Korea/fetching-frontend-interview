import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// components
import ProductListWrapper from 'components/productList/ProductListWrapper';
import MoreBtn from 'components/productList/MoreBtn';
import Product from 'components/product';
import LoadingProduct from 'components/product/LoadingProduct';
// modules
import { clearProductList, getProductList } from 'modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const isReady = useSelector(state => state.app.isReady);
  const isLastProduct = useSelector(state => state.product.isLast);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);
  const productList = useSelector(state => state.product.productList);
  const parameters = useParams();

  const [isLoading, setIsLoading] = useState(false);

  /** 상품 더보기 클릭 함수 */
  const onMoreProducts = () => {
    setIsLoading(true);
    dispatch(getProductList()).finally(() => setIsLoading(false));
  };

  /** 상품 호출 작업 */
  useEffect(() => {
    const { category0, category1, category2 } = parameters;
    let params = [category0, category1, category2];
    params = params.filter(param => param);
    params = params.map(param => Number(param));

    if (categoryIdList.length === 0 || params.length === 0) return;

    if (params.length === categoryIdList.length) {
      for (let i = 0; i < params.length; i++) {
        if (params[i] !== categoryIdList[i]) {
          console.log('1 여기서 부름');
          setIsLoading(true);
          dispatch(clearProductList());
          dispatch(getProductList(params[params.length - 1])).then(() =>
            setIsLoading(false),
          );
          return;
        }
      }
      return;
    }

    console.log('3 여기서 부름');
    setIsLoading(true);
    dispatch(clearProductList());
    dispatch(getProductList(params[params.length - 1])).then(() => setIsLoading(false));
  }, [dispatch, productList, categoryIdList, parameters]);

  /** 초기 상품 호출 1회 호출 */
  /* eslint-disable */
  useEffect(() => {
    if (isReady && productList.length === 0) {
      setIsLoading(true);
      dispatch(getProductList())
        .then(() => setIsLoading(false))
        .catch(() => {
          window.setTimeout(() => {
            dispatch(getProductList()).then(() => setIsLoading(false));
          }, 0);
        });
    }
  }, [dispatch, isReady]);
  /* eslint-enable */

  const ProductList = productList.map(product => (
    <Product
      key={product.id}
      to={`/product/${product.id}`}
      product={product}
      onClick={() => {}}
    />
  ));
  const LoadingProductList = new Array(12)
    .fill(0)
    .map((_, idx) => <LoadingProduct key={idx} />);

  return (
    <ProductListWrapper>
      <ul>{productList.length === 0 ? LoadingProductList : ProductList}</ul>
      {!isLastProduct && <MoreBtn isLoading={isLoading} onClick={onMoreProducts} />}
    </ProductListWrapper>
  );
};

export default ProductList;
