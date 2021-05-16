import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
import Footer from 'containers/Footer';
import ProductCategory from 'containers/productList/Category';
import ProductOption from 'containers/productList/Option';
import ProductList from 'containers/productList/ProductList';
// components
import MainPageLayout from 'components/layout/MainPageLayout';
// hooks
import useCategory from 'lib/hooks/productList/useCategory';

const ProductListPage = () => {
  useCategory();

  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainPageLayout>
        <Header isShowCategory={true} />
        <ProductCategory />
        <ProductOption />
        <ProductList />
        <Footer />
      </MainPageLayout>
    </>
  );
};

export default ProductListPage;
