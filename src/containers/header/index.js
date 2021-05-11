// containers
import HeaderBar from 'containers/header/HeaderBar';
import CategoryBar from 'containers/header/CategoryBar';
// components
import Wrapper from 'components/header/Wrapper';

const Header = ({ isShowCategory }) => {
  return (
    <Wrapper>
      <HeaderBar />
      {isShowCategory && <CategoryBar />}
    </Wrapper>
  );
};

export default Header;
