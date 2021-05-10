import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/Header';
// components
import MainLayout from 'components/layout/MainLayout';

const ProductListPage = () => {
  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainLayout>
        <Header />
      </MainLayout>
    </>
  );
};

export default ProductListPage;
