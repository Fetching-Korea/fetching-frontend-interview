import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import Wrapper from 'components/header/categorybar/Wrapper';
import TopWrapper from 'components/header/categorybar/TopWrapper';
import GenderLinkWrapper from 'components/header/categorybar/GenderLinkWrapper';
import CategoryLinkWrapper from 'components/header/categorybar/CategoryLinkWrapper';
import TopLink from 'components/header/categorybar/TopLink';
import GenderLink from 'components/header/categorybar/GenderLink';
import CategoryLink from 'components/header/categorybar/CategoryLink';
import SubCategoryLink from 'components/header/categorybar/SubCategoryLink';
import VerticalBar from 'components/header/categorybar/VerticalBar';
// hooks
import useBasePath from 'lib/hooks/useBasePath';

const CategoryBar = () => {
  const categoryList = useSelector(state => state.catalog.categoryList);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);

  const [subCategoryList, setSubCategoryList] = useState([]);

  const basePath = useBasePath();

  /** 해당 카테고리 경로 반환 */
  const getCategoryPath = (category, depth) => {
    if (depth === 0) return `${basePath}/${category.id}`;

    let changedList = [...categoryIdList];
    changedList = changedList.slice(0, depth - 1);

    if (category) {
      changedList.push(category.parent);
      changedList.push(category.id);
    }

    return `${basePath}/${changedList.join('/')}`;
  };

  /** 대분류 링크 리스트 */
  const GenderLinkList = categoryList.map(category => (
    <GenderLink
      key={category.id}
      to={getCategoryPath(category, 0)}
      message={category.name}
      isChecked={category.id === categoryIdList[0]}
    />
  ));

  /** 중분류 링크 리스트 */
  const CategoryLinkList = subCategoryList.map(category => (
    <CategoryLink
      key={category.id}
      to={getCategoryPath(category, 1)}
      message={category.name}
      isChecked={categoryIdList.length > 1 && category.id === categoryIdList[1]}
      subCategoryList={
        /** 소분류 링크 리스트 */
        category.children.map(subCategory => (
          <SubCategoryLink
            key={subCategory.id}
            to={getCategoryPath(subCategory, 2)}
            message={subCategory.name}
          />
        ))
      }
    />
  ));

  /** 카테고리 중분류 리스트 설정 */
  useEffect(() => {
    if (categoryList.length === 0 || categoryIdList.length === 0) return;

    const category_0 = categoryList.filter(category => category.id === categoryIdList[0]);
    if (category_0.length === 0) return;

    setSubCategoryList(category_0[0].children);
  }, [categoryList, categoryIdList, setSubCategoryList]);

  return (
    <Wrapper>
      <TopWrapper>
        <GenderLinkWrapper>{GenderLinkList}</GenderLinkWrapper>

        <VerticalBar />

        <GenderLinkWrapper>
          <TopLink to={'/brand'} message="브랜드" />
          <TopLink to={'/sale'} message="SALE" isHighlight={true} />
          <TopLink to={'/faq'} message="고객지원" />
        </GenderLinkWrapper>
      </TopWrapper>

      <CategoryLinkWrapper>
        <CategoryLink
          to={getCategoryPath(null, 1)}
          message="전체"
          isChecked={categoryIdList.length < 2}
        />
        {CategoryLinkList}
      </CategoryLinkWrapper>
    </Wrapper>
  );
};

export default CategoryBar;
