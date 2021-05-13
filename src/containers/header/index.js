import { useEffect, useRef } from 'react';
// containers
import HeaderBar from 'containers/header/HeaderBar';
import CategoryBar from 'containers/header/CategoryBar';
import NavBar from 'containers/header/NavBar';
// components
import Wrapper from 'components/header/Wrapper';
// hooks
import useScrollDirection from 'lib/hooks/useScrollDirection';

const Header = ({ isShowCategory }) => {
  const ref = useRef(null);
  const scrollDirection = useScrollDirection();

  const headerEvent = direction => {
    if (!ref.current) return;

    if (direction === 'DOWN') {
      ref.current.style.top = '-48px';
    } else {
      ref.current.style.top = '0';
    }
  };

  useEffect(() => {
    headerEvent(scrollDirection);
  }, [scrollDirection]);

  return (
    <Wrapper ref={ref}>
      <HeaderBar />
      <CategoryBar isShowCategory={isShowCategory} />
      {isShowCategory && <NavBar />}
    </Wrapper>
  );
};

export default Header;
