import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
// components
import AlphabetWrapper from 'components/brand/AlphabetWrapper';
import AlphabetBtn from 'components/brand/AlphabetBtn';
import BrandWrapper from 'components/brand/BrandWrapper';
import AlphabetBrand from 'components/brand/AlphabetBrand';

const Brand = () => {
  const brandList = useSelector(state => state.catalog.brandList);

  const [alphabetList, setAlphabetList] = useState([]);
  const ref = useRef(null);

  /** 알파벳 위치로 스크롤 이동 함수 */
  const onClickAlphabet = char => {
    if (!ref.current) return;

    const target = ref.current.querySelector(`[data-char="${char}"]`);
    if (!target) return;

    document.scrollingElement.scrollTop = target.offsetTop - 61;
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

  return (
    <>
      <AlphabetWrapper>{AlphabetList}</AlphabetWrapper>
      <BrandWrapper ref={ref}>{AlphabetBrandList}</BrandWrapper>
    </>
  );
};

export default Brand;
