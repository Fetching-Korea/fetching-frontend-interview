import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import CategoryImg from 'components/productList/CategoryImg';
import Wrapper from 'components/productList/category/Wrapper';
import Title from 'components/productList/category/Title';
import CategoryLinkWrapper from 'components/productList/category/CategoryLinkWrapper';
import CategoryLink from 'components/productList/category/CategoryLink';
// hooks
import useBasePath from 'lib/hooks/useBasePath';

const TopCategory = () => {
  const categoryList = useSelector(state => state.catalog.categoryList);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);

  const [categoryName, setCategoryName] = useState('');
  const [subCategoryList, setSubCategoryList] = useState([]);

  const basePath = useBasePath();

  /** 해당 카테고리 경로 반환 */
  const getCategoryPath = (category, depth) => {
    if (depth === 0) {
      return `${basePath}/${category.id}`;
    }

    let changedList = [...categoryIdList];
    changedList = changedList.slice(0, depth);

    if (category) {
      if (changedList.length === depth - 1) {
        changedList.push(category.parent);
      }
      changedList.push(category.id);
    }

    return `${basePath}/${changedList.join('/')}`;
  };

  /** 카테고리 링크 리스트 */
  const CategoryLinks = subCategoryList.map(category => (
    <CategoryLink
      key={category.name}
      to={getCategoryPath(category, 2)}
      message={category.name}
      isChecked={categoryIdList.length >= 3 && category.id === categoryIdList[2]}
    />
  ));

  /** 카테고리 소분류 리스트 설정 */
  useEffect(() => {
    setCategoryName(``);
    setSubCategoryList([]);
    if (categoryList.length === 0 || categoryIdList.length === 0) return;
    if (categoryList.length <= 1 || categoryIdList.length <= 1) {
      const id = categoryIdList[0];
      const filtered = categoryList.filter(category => category.id === id);
      if (filtered.length === 0) return;

      setCategoryName(filtered[0].name + ' 전체');
      setSubCategoryList([]);
      return;
    }

    const category_0 = categoryList.filter(category => category.id === categoryIdList[0]);
    if (category_0.length === 0) return;

    const category_1 = category_0[0].children.filter(
      category => category.id === categoryIdList[1],
    );
    if (category_1.length === 0) return;

    setCategoryName(`${category_0[0].name} ${category_1[0].name}`);
    setSubCategoryList(category_1[0].children);
  }, [categoryList, categoryIdList, setCategoryName, setSubCategoryList]);

  return (
    <Wrapper>
      <Title>{categoryName}</Title>
      {CategoryLinks.length === 0 && (
        <CategoryImg
          src="https://fetching-app.s3.ap-northeast-2.amazonaws.com/exhibitions/banner/pc_women_dress.png"
          art="소개"
        />
      )}
      <CategoryLinkWrapper>{CategoryLinks}</CategoryLinkWrapper>
    </Wrapper>
  );
};

export default TopCategory;
