import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
// components
import MainPageLayout from 'components/layout/MainPageLayout';

const ProductDetailPage = ({ match }) => {
  const productId = match.params['id'];
  console.log(productId);

  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainPageLayout>
        <Header isShowCategory={true} />
      </MainPageLayout>
    </>
  );
};

export default ProductDetailPage;
