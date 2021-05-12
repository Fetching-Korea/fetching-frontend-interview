import { useState } from 'react';
import { useSelector } from 'react-redux';
// components
import Wrapper from 'components/header/categorybar/Wrapper';
import TopWrapper from 'components/header/categorybar/TopWrapper';
import GenderBtnWrapper from 'components/header/categorybar/GenderBtnWrapper';
import CategoryBtnWrapper from 'components/header/categorybar/CategoryBtnWrapper';
import TopLink from 'components/header/categorybar/TopLink';
import GenderBtn from 'components/header/categorybar/GenderBtn';
import CategoryBtn from 'components/header/categorybar/CategoryBtn';
import VerticalBar from 'components/header/categorybar/VerticalBar';
// modules
import { useEffect } from 'react';
// hooks
import useBasePath from 'lib/hooks/useBasePath';

const CategoryBar = () => {
  const categoryList = useSelector(state => state.catalog.categoryList);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);

  const [subCategoryList, setSubCategoryList] = useState([]);

  const basePath = useBasePath();

  /** 해당 카테고리 경로 반환 */
  const getCategoryPath = (categoryId, depth) => {
    if (depth === 0) {
      return `${basePath}/${categoryId}`;
    } else {
      let changedList = [...categoryIdList];
      changedList = changedList.slice(0, depth);

      if (categoryId === null) {
        return `${basePath}/${changedList}`;
      } else {
        changedList.push(categoryId);
        return `${basePath}/${changedList.join('/')}`;
      }
    }
  };

  const GenderBtnList = categoryList.map(category => (
    <GenderBtn
      key={category.id}
      to={getCategoryPath(category.id, 0)}
      message={category.name}
      isChecked={category.id === categoryIdList[0]}
    />
  ));

  const CategoryBtnList = subCategoryList.map(category => (
    <CategoryBtn
      key={category.id}
      to={getCategoryPath(category.id, 1)}
      message={category.name}
      isChecked={categoryIdList.length > 1 && category.id === categoryIdList[1]}
    />
  ));

  /** 카테고리 Depth 1 리스트 설정 */
  useEffect(() => {
    if (categoryList.length === 0 || categoryIdList.length === 0) return;

    const category_0 = categoryList.filter(category => category.id === categoryIdList[0]);
    if (category_0.length === 0) return;

    setSubCategoryList(category_0[0].children);
  }, [categoryList, categoryIdList, setSubCategoryList]);

  return (
    <Wrapper>
      <TopWrapper>
        <GenderBtnWrapper>{GenderBtnList}</GenderBtnWrapper>

        <VerticalBar />

        <GenderBtnWrapper>
          <TopLink to={'/brand'} message="브랜드" />
          <TopLink to={'/sale'} message="SALE" isHighlight={true} />
          <TopLink to={'/faq'} message="고객지원" />
        </GenderBtnWrapper>
      </TopWrapper>

      <CategoryBtnWrapper>
        <CategoryBtn
          to={getCategoryPath(null, 1)}
          message="전체"
          isChecked={categoryIdList.length < 2}
        />

        {CategoryBtnList}
      </CategoryBtnWrapper>
    </Wrapper>
  );
};

export default CategoryBar;
