import { Switch, Route } from 'react-router-dom';
// Pages
import HomePage from 'pages/HomePage';
import ProductListPage from 'pages/product/ProductListPage';
import PruductDetailPage from 'pages/product/PruductDetailPage';
import BrandListPage from 'pages/BrandListPage';
import NotFound from 'pages/NotFound';
// Containers
import Modal from 'containers/common/Modal';
// hooks
import useInit from 'lib/hooks/useInit';
import useWebAccessibility from 'lib/hooks/useWebAccessibility';

const App = () => {
  const [isMouseDown] = useWebAccessibility();
  /* 어플리케이션 초기 구동에 필요한 요청 실행 */
  useInit();

  return (
    <div className={isMouseDown ? 'mousedown' : ''}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/productList" component={ProductListPage} exact />
        <Route path="/productList/:id" component={PruductDetailPage} exact />
        <Route path="/brands" component={BrandListPage} exact />
        <Route path="*" component={NotFound} status={404} />
      </Switch>
      <Modal /> {/* Modal Position */}
    </div>
  );
};

export default App;
