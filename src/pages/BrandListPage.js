import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
import Footer from 'containers/Footer';
import Brand from 'containers/Brand';
// components
import MainPageLayout from 'components/layout/MainPageLayout';

const BrandListPage = () => {
  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainPageLayout>
        <Header isShowCategory={false} />
        <Brand />
        <Footer />
      </MainPageLayout>
    </>
  );
};

export default BrandListPage;
