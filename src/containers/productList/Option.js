import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import OptionWrapperDesktop from 'components/productList/option/OptionWrapperDesktop';
import OptionWrapperMobile from 'components/productList/option/OptionWrapperMobile';
import FilterWrapper from 'components/productList/option/FilterWrapper';
import BrandOption from 'components/productList/option/brand';
import PriceOption from 'components/productList/option/price';
import SortOption from 'components/productList/option/sort';
import TotalCnt from 'components/header/navbar/TotalCnt';
// modules
import { setProductOptions } from 'modules/product';
import { getProductList } from 'modules/product';

const ProductList = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.product.info.count);
  const sortId = useSelector(state => state.product.options.sort);
  const brandObject = useSelector(state => state.catalog.brandList);
  const brandList = Object.keys(brandObject).reduce((acc, cur) => {
    acc.push(...brandObject[cur]);
    return acc;
  }, []);

  const [isChanged, setIsChanged] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedBrandIdList, setSelectedBrandIdList] = useState([]);

  /** 정렬 */
  const onClickSort = sortId => {
    dispatch(setProductOptions({ sort: sortId }));
    dispatch(getProductList());
  };

  /** 가격 필터링 */
  const onClickPrice = price => {
    setSelectedPrice(price);
    setIsChanged(true);
  };

  /** 브랜드 필터링 */
  const onClickBrand = brandId => {
    const idx = selectedBrandIdList.indexOf(brandId);
    if (~idx) {
      const result = [...selectedBrandIdList];
      result.splice(idx, 1);
      setSelectedBrandIdList(result);
    } else {
      setSelectedBrandIdList(v => [...v, brandId]);
    }
    setIsChanged(true);
  };

  /** 필터링 전체 해제 */
  const onClickCancel = () => {
    setSelectedPrice(null);
    setSelectedBrandIdList([]);
    setIsChanged(true);
  };

  /** 필터링 적용 */
  const onClickApply = () => {
    if (!isChanged) return;

    dispatch(
      setProductOptions({
        brandIdList: selectedBrandIdList,
        minimumPrice: selectedPrice ? selectedPrice.min : 0,
        maximumPrice: selectedPrice ? selectedPrice.max : 999_999_999_999,
        sort: sortId,
      }),
    );
    dispatch(getProductList());
  };

  return (
    <>
      <OptionWrapperDesktop>
        <FilterWrapper>
          <BrandOption
            brandList={brandList}
            selectedBrandIdList={selectedBrandIdList}
            onClick={onClickBrand}
          />
          <PriceOption
            priceList={[
              { id: 0, name: '30만원 이하', min: 0, max: 300_000 },
              { id: 1, name: '30만원 ~ 80만원', min: 300_000, max: 800_000 },
              { id: 2, name: '80만원 ~ 160만원', min: 800_000, max: 1_600_000 },
              { id: 3, name: '160만원 ~ 500만원', min: 1_600_000, max: 5_000_000 },
              { id: 4, name: '500만원 이상', min: 5_000_000, max: 999_999_999_999 },
            ]}
            selectedId={selectedPrice ? selectedPrice.id : null}
            onClick={onClickPrice}
          />
        </FilterWrapper>
        <SortOption
          selectedId={sortId}
          sortList={[
            { id: 0, name: '최신' },
            { id: 1, name: '할인율' },
            { id: 2, name: '낮은가격' },
            { id: 3, name: '높은가격' },
          ]}
          onClick={onClickSort}
          isFiltered={selectedPrice || selectedBrandIdList.length !== 0}
          onClickApply={onClickApply}
          onClickCancel={onClickCancel}
        />

        <TotalCnt value={count} />
      </OptionWrapperDesktop>

      <OptionWrapperMobile></OptionWrapperMobile>
    </>
  );
};

export default ProductList;
