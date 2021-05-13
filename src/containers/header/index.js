import { useState, useEffect, useRef } from 'react';
// containers
import HeaderBar from 'containers/header/HeaderBar';
import CategoryBar from 'containers/header/CategoryBar';
import NavBar from 'containers/header/NavBar';
// components
import Wrapper from 'components/header/Wrapper';

const Header = ({ isShowCategory }) => {
  const [scrollDir, setScrollDir] = useState('DOWN');
  const ref = useRef(null);

  const headerEvent = direction => {
    if (!ref.current) return;

    if (direction === 'DOWN') {
      ref.current.style.top = '-48px';
    } else {
      ref.current.style.top = '0';
    }
  };

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'DOWN' : 'UP');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    headerEvent(scrollDir);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <Wrapper ref={ref}>
      <HeaderBar />
      <CategoryBar isShowCategory={isShowCategory} />
      {isShowCategory && <NavBar />}
    </Wrapper>
  );
};

export default Header;
