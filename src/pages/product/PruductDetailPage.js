import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
// components
import MainLayout from 'components/layout/MainLayout';

const ProductDetailPage = ({ match }) => {
  const productId = match.params['id'];
  console.log(productId);

  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainLayout>
        <Header isShowCategory={true} />
      </MainLayout>
    </>
  );
};

export default ProductDetailPage;
