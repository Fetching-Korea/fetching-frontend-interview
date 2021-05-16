import { useState, useEffect } from 'react';

/**
 * 스크롤 방향 탐지 hook
 * @param {object} props
 * @param {(direction: ("DOWN" | "UP")) => void} props.callback 스크롤 방향이 변했을 떄, 실행될 callback 함수 (Optional)
 * @returns {("DOWN" | "UP")} 스크롤 방향
 */
const useScrollDirection = callback => {
  const [scrollDir, setScrollDir] = useState('DOWN');

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

    callback && callback(scrollDir);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir, callback]);

  return scrollDir;
};

export default useScrollDirection;
