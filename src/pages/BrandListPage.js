import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
import Brand from 'containers/Brand';
// components
import MainLayout from 'components/layout/MainLayout';

const BrandListPage = () => {
  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainLayout>
        <Header isShowCategory={false} />
        <Brand />
      </MainLayout>
    </>
  );
};

export default BrandListPage;