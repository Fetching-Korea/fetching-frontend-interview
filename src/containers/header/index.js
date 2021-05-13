// containers
import HeaderBar from 'containers/header/HeaderBar';
import CategoryBar from 'containers/header/CategoryBar';
import NavBar from 'containers/header/NavBar';
// components
import Wrapper from 'components/header/Wrapper';

const Header = ({ isShowCategory }) => {
  return (
    <Wrapper>
      <HeaderBar />
      <CategoryBar isShowCategory={isShowCategory} />
      {isShowCategory && <NavBar />}
    </Wrapper>
  );
};

export default Header;
