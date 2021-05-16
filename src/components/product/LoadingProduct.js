import { FakeWrapper } from 'components/product/Wrapper';
import Thumbnail from 'components/product/Thumbnail';

const LoadingProduct = () => {
  return (
    <FakeWrapper>
      <Thumbnail src="" alt="로딩 썸네일" isLoading={true} />
    </FakeWrapper>
  );
};

export default LoadingProduct;
