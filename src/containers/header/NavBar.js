import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import Wrapper from 'components/header/navbar/Wrapper';
import CategoryInfoWrapper from 'components/header/navbar/CategoryInfoWrapper';
import CategoryInfo from 'components/header/navbar/CategoryInfo';
import RightIcon from 'components/header/navbar/RightIcon';
import TotalCnt from 'components/header/navbar/TotalCnt';

const NavBar = () => {
  const categoryList = useSelector(state => state.catalog.categoryList);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);
  const count = useSelector(state => state.product.info.count);

  const [selectedCategories, setSelectedCategories] = useState([]);

  /** 모바일 카테고리 선택 함수 */
  const onClick = () => {
    // TODO 카테고리 선택 열리기
  };

  const SelectedCategories = selectedCategories
    .map((categoryName, idx) => <CategoryInfo key={idx} message={categoryName} />)
    .reduce((accu, elem) => {
      return accu === null
        ? [elem]
        : [...accu, <RightIcon key={elem.props.message} />, elem];
    }, null);

  /** 선택된 카테고리 이름 추출 작업 */
  useEffect(() => {
    if (!categoryList) return;
    const result = [];
    let target = categoryList;

    categoryIdList.forEach(id => {
      const filtered = target.filter(category => category.id === id);
      if (filtered.length === 0) return;
      result.push(filtered[0].name);
      target = filtered[0].children;
    });
    setSelectedCategories(result);
  }, [categoryList, categoryIdList, setSelectedCategories]);

  return (
    <Wrapper onClick={onClick}>
      <CategoryInfoWrapper>
        {SelectedCategories}
        {selectedCategories.length === 1 && (
          <>
            <RightIcon />
            <CategoryInfo message="전체" />
          </>
        )}
      </CategoryInfoWrapper>
      <TotalCnt value={count} />
    </Wrapper>
  );
};

export default NavBar;
