import { Helmet } from 'react-helmet-async';
// components
import Home from 'containers/Home';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <Home />
    </>
  );
};

export default HomePage;
