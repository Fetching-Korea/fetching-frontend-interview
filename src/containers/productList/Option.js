import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import OptionWrapperDesktop from 'components/productList/option/OptionWrapperDesktop';
import OptionWrapperMobile from 'components/productList/option/OptionWrapperMobile';
import FilterWrapper from 'components/productList/option/FilterWrapper';
import BrandOption from 'components/productList/option/brand';
import PriceOption from 'components/productList/option/price';
import SortOption from 'components/productList/option/sort';
import FilterBtn from 'components/productList/option/FilterBtn';
import FilteredBtn from 'components/productList/option/FilteredBtn';
import TotalCnt from 'components/header/navbar/TotalCnt';
// modules
import { setProductOptions, clearProductList, getProductList } from 'modules/product';

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
  const [selectedBrandList, setSelectedBrandList] = useState([]);

  /** 정렬 */
  const onClickSort = sortId => {
    dispatch(setProductOptions({ sort: sortId }));
    dispatch(clearProductList());
    dispatch(getProductList());
  };

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
    dispatch(clearProductList());
    dispatch(getProductList());
  };

  /** 필터링 메뉴 열기 */
  // TODO 필터링 모달 제작
  const onFilterModal = () => {};

  /** 정렬 메뉴 열기 */
  // TODO 정렬 모달 제작
  const onSortModal = () => {};

  return (
    <>
      {/* Desktop / Table UI */}
      <OptionWrapperDesktop>
        <FilterWrapper>
          <BrandOption
            brandList={brandList}
            selectedBrandList={selectedBrandList}
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
            { id: 0, name: '최신순' },
            { id: 1, name: '할인율순' },
            { id: 2, name: '낮은가격순' },
            { id: 3, name: '높은가격순' },
          ]}
          onClick={onClickSort}
          isFiltered={selectedPrice || selectedBrandList.length !== 0}
          onClickApply={onClickApply}
          onClickCancel={onClickCancel}
        />

        <TotalCnt value={count} />
      </OptionWrapperDesktop>

      {/* Mobile UI */}
      <OptionWrapperMobile>
        <ul>
          <FilterBtn type="FILTER" message="필터링" onClick={onFilterModal} />
          <FilterBtn
            type="SORT"
            message={
              (sortId === 0 && '최신순') ||
              (sortId === 1 && '할인율순') ||
              (sortId === 2 && '낮은가격순') ||
              (sortId === 3 && '높은가격순')
            }
            onClick={onSortModal}
          />
        </ul>
        <ul>
          {selectedBrandList.length > 0 && (
            <FilteredBtn
              type="BRAND"
              message={`${selectedBrandList[0].name} 외 ${
                selectedBrandList.length - 1
              }개`}
              onClick={() => setSelectedBrandList([])}
            />
          )}
          {selectedPrice && (
            <FilteredBtn
              type="PRICE"
              message={`${selectedPrice.name}`}
              onClick={() => onClickPrice(null)}
            />
          )}
        </ul>
      </OptionWrapperMobile>
    </>
  );
};

export default ProductList;
