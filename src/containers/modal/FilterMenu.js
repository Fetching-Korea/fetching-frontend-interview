import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import Wrapper from 'components/modal/filterMenu/Wrapper';
import HeaderWrapper from 'components/modal/filterMenu/HeaderWrapper';
import ControlBtnWrapper from 'components/modal/filterMenu/ControlBtnWrapper';
import CloseBtn from 'components/modal/filterMenu/CloseBtn';
import Title from 'components/modal/filterMenu/Title';
import SubTitle from 'components/modal/filterMenu/SubTitle';
// component/price
import PriceWrapper from 'components/productList/option/price/Wrapper';
import RadioBtn from 'components/productList/option/price/RadioBtn';
import ApplyBtn from 'components/productList/option/ApplyBtn';
import CancelBtn from 'components/productList/option/CancelBtn';
// component/brand
import BrandWrapper from 'components/productList/option/brand/Wrapper';
import CheckboxWrapper from 'components/productList/option/brand/CheckboxWrapper';
import CheckboxBtn from 'components/productList/option/brand/CheckboxBtn';
// modules
import {
  setProductOptions,
  setProductSelected,
  clearProductList,
  getProductList,
} from 'modules/product';
// styles
import { mediaValue } from 'lib/styles/media';

export const FilterMenu = ({ PreventModalOff, ModalOff, args }) => {
  const dispatch = useDispatch();
  const sortId = useSelector(state => state.product.options.sort);
  const selectedOptions = useSelector(state => state.product.selected);
  const brandObject = useSelector(state => state.catalog.brandList);
  const brandList = Object.keys(brandObject).reduce((acc, cur) => {
    acc.push(...brandObject[cur]);
    return acc;
  }, []);

  const [isOpen, setIsOpen] = useState(true);
  const [isChanged, setIsChanged] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedBrandList, setSelectedBrandList] = useState([]);

  const selectedBrandIdList = selectedBrandList.map(brand => brand.id);

  /** 모달 닫기 함수 */
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
    ModalOff();
  }, [ModalOff]);

  const onResize = useCallback(
    () => window.innerWidth > mediaValue.small && onCloseModal(),
    [onCloseModal],
  );

  /** 가격 필터링 */
  const onClickPrice = price => {
    setSelectedPrice(price);
    setIsChanged(true);
  };

  /** 브랜드 필터링 */
  const onClickBrand = brand => {
    const selectedBrandIdList = selectedBrandList.map(brand => brand.id);
    const idx = selectedBrandIdList.indexOf(brand.id);
    if (~idx) {
      const result = [...selectedBrandList];
      result.splice(idx, 1);
      setSelectedBrandList(result);
    } else {
      setSelectedBrandList(v => [...v, brand]);
    }
    setIsChanged(true);
  };

  /** 필터링 전체 해제 */
  const onClickCancel = () => {
    setSelectedPrice(null);
    setSelectedBrandList([]);
    setIsChanged(true);
  };

  /** 필터링 적용 */
  const onClickApply = () => {
    if (!isChanged) return;

    dispatch(
      setProductOptions({
        brandIdList: selectedBrandList,
        minimumPrice: selectedPrice ? selectedPrice.min : 0,
        maximumPrice: selectedPrice ? selectedPrice.max : 999_999_999_999,
        sort: sortId,
      }),
    );
    dispatch(
      setProductSelected({
        brandList: selectedBrandList,
        price: selectedPrice,
      }),
    );
    dispatch(clearProductList());
    dispatch(getProductList());
    onCloseModal();
  };

  const PriceList = args.priceList.map(price => (
    <RadioBtn
      key={price.id}
      message={price.name}
      isSelected={selectedPrice && price.id === selectedPrice.id}
      onClick={() => onClickPrice(price)}
    />
  ));

  const BrandList = brandList.map(brand => (
    <CheckboxBtn
      key={brand.name}
      message={brand.name}
      isSelected={~selectedBrandIdList.indexOf(brand.id)}
      onClick={() => onClickBrand(brand)}
    ></CheckboxBtn>
  ));

  /** 모바일 화면에서만 작동 */
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  /** 옵션 변경 사항 표시 작업 */
  useEffect(() => {
    setSelectedBrandList(selectedOptions.brandList);
    setSelectedPrice(selectedOptions.price);
  }, [selectedOptions, setIsChanged, setSelectedBrandList, setSelectedPrice]);

  return (
    <Wrapper onMouseDown={PreventModalOff} isOpen={isOpen}>
      <HeaderWrapper>
        <CloseBtn onClick={onCloseModal} />
        <Title>필터링 메뉴</Title>
      </HeaderWrapper>

      <SubTitle>브랜드</SubTitle>
      <BrandWrapper>
        <CheckboxWrapper>{BrandList}</CheckboxWrapper>
      </BrandWrapper>

      <SubTitle>가격</SubTitle>
      <PriceWrapper>
        <ul>
          <RadioBtn
            message="전체"
            isSelected={!selectedPrice || selectedPrice.id === null}
            onClick={() => onClickPrice(null)}
          />
          {PriceList}
        </ul>
      </PriceWrapper>

      <ControlBtnWrapper>
        <CancelBtn onClick={onClickCancel}>필터링 전체 해제</CancelBtn>
        <ApplyBtn onClick={onClickApply}>적용</ApplyBtn>
      </ControlBtnWrapper>
    </Wrapper>
  );
};
