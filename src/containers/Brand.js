import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
// components
import AlphabetWrapper from 'components/brand/AlphabetWrapper';
import AlphabetBtn from 'components/brand/AlphabetBtn';
import BrandWrapper from 'components/brand/BrandWrapper';
import AlphabetBrand from 'components/brand/AlphabetBrand';
// hooks
import useScrollDirection from 'lib/hooks/useScrollDirection';
// styles
import { mediaValue } from 'lib/styles/media';

const Brand = () => {
  const brandList = useSelector(state => state.catalog.brandList);

  const [alphabetList, setAlphabetList] = useState([]);
  const brandRef = useRef(null);
  const headerRef = useRef(null);
  const scrollDirection = useScrollDirection();

  const headerEvent = direction => {
    if (!headerRef.current) return;

    if (window.innerWidth > mediaValue.small) {
      headerRef.current.removeAttribute('style');
      return;
    }

    if (direction === 'DOWN') {
      headerRef.current.style.top = '0px';
    } else {
      headerRef.current.style.top = '38px';
    }
  };

  /** 알파벳 위치로 스크롤 이동 함수 */
  const onClickAlphabet = char => {
    if (!brandRef.current) return;

    const target = brandRef.current.querySelector(`[data-char="${char}"]`);
    if (!target) return;

    document.scrollingElement.scrollTop = target.offsetTop - 81;
  };

  /** 상단 알파벳 바로가기 버튼 리스트 */
  const AlphabetList = alphabetList.map(char => (
    <AlphabetBtn key={char} message={char} onClick={() => onClickAlphabet(char)} />
  ));

  /** 알파벳별 브랜드 리스트 */
  const AlphabetBrandList = alphabetList.map(char => {
    const brands = brandList[char];
    return <AlphabetBrand key={char} alphabet={char} brandList={brands} />;
  });

  useEffect(() => {
    setAlphabetList(Object.keys(brandList));
  }, [brandList, setAlphabetList]);

  useEffect(() => {
    headerEvent(scrollDirection);
  }, [scrollDirection]);

  return (
    <>
      <AlphabetWrapper ref={headerRef}>{AlphabetList}</AlphabetWrapper>
      <BrandWrapper ref={brandRef}>{AlphabetBrandList}</BrandWrapper>
    </>
  );
};

export default Brand;
