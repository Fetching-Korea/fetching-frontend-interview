import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
// components
import Wrapper from 'components/modal/filterMenu/Wrapper';
import HeaderWrapper from 'components/modal/filterMenu/HeaderWrapper';
import CloseBtn from 'components/modal/filterMenu/CloseBtn';
import Title from 'components/modal/filterMenu/Title';

import GenderLinkWrapper from 'components/modal/categoryMenu/GenderLinkWrapper';
import CategoryLinkWrapper from 'components/modal/categoryMenu/CategoryLinkWrapper';
import CategoryLink from 'components/modal/categoryMenu/CategoryLink';
import SubCategoryLink from 'components/modal/categoryMenu/SubCategoryLink';

import GenderLink from 'components/header/categorybar/GenderLink';
// styles
import { mediaValue } from 'lib/styles/media';

export const CategoryMenu = ({ PreventModalOff, ModalOff }) => {
  const [isOpen, setIsOpen] = useState(true);

  const categoryList = useSelector(state => state.catalog.categoryList);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);

  const [subCategoryList, setSubCategoryList] = useState([]);

  let basePath = '/productList';

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

  /** 모달 닫기 함수 */
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
    ModalOff();
  }, [ModalOff]);

  const onResize = useCallback(
    () => window.innerWidth > mediaValue.small && onCloseModal(),
    [onCloseModal],
  );

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
      onClick={onCloseModal}
      SubCategoryList={category.children.map(subCategory => (
        <SubCategoryLink
          key={subCategory.id}
          to={getCategoryPath(subCategory, 2)}
          message={subCategory.name}
          onClick={onCloseModal}
        />
      ))}
    />
  ));

  /** 모바일 화면에서만 작동 */
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  /** 카테고리 중분류 리스트 설정 */
  useEffect(() => {
    if (categoryList.length === 0 || categoryIdList.length === 0) return;

    const category_0 = categoryList.filter(category => category.id === categoryIdList[0]);
    if (category_0.length === 0) return;

    setSubCategoryList(category_0[0].children);
  }, [categoryList, categoryIdList, setSubCategoryList]);

  return (
    <Wrapper onMouseDown={PreventModalOff} isOpen={isOpen}>
      <HeaderWrapper>
        <CloseBtn onClick={onCloseModal} />
        <Title>메뉴</Title>
      </HeaderWrapper>

      <GenderLinkWrapper>{GenderLinkList}</GenderLinkWrapper>

      <CategoryLinkWrapper>
        {CategoryLinkList}

        <CategoryLink to="/brand" message="브랜드" onClick={onCloseModal} />
        <CategoryLink to="/sale" message="SALE" onClick={onCloseModal} />
        <CategoryLink to="/faq" message="고객지원" onClick={onCloseModal} />
      </CategoryLinkWrapper>
    </Wrapper>
  );
};
