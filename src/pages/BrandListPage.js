import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
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
      </MainPageLayout>
    </>
  );
};

export default BrandListPage;
