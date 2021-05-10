import { Switch, Route } from 'react-router-dom';
// Pages
import HomePage from 'pages/HomePage';
import ProductListPage from 'pages/product/ProductListPage';
import PruductDetailPage from 'pages/product/PruductDetailPage';
import BrandListPage from 'pages/BrandListPage';
import NotFound from 'pages/NotFound';
// Containers
import Modal from 'containers/common/Modal';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/productList" component={ProductListPage} exact />
        <Route path="/productList/:id" component={PruductDetailPage} exact />
        <Route path="/brands" component={BrandListPage} exact />
        <Route path="*" component={NotFound} status={404} />
      </Switch>
      <Modal /> {/* Modal Position */}
    </>
  );
};

export default App;
