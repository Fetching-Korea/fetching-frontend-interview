import { Helmet } from 'react-helmet-async';

const ProductDetailPage = ({ match }) => {
  const productId = match.params['id'];
  console.log(productId);

  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <h1>상품 상세 페이지</h1>
    </>
  );
};

export default ProductDetailPage;
