import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
import TopCategory from 'containers/product/TopCategory';
// components
import MainLayout from 'components/layout/MainLayout';
// hooks
import useCategory from 'lib/hooks/productList/useCategory';

const ProductListPage = () => {
  useCategory();

  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainLayout>
        <Header isShowCategory={true} />
        <TopCategory />
      </MainLayout>
    </>
  );
};

export default ProductListPage;
