import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { setProductOptions } from 'modules/product';
import { useEffect } from 'react';

const CategoryBar = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(state => state.catalog.categoryList);
  const categoryIdList = useSelector(state => state.product.options.categoryIdList);

  const [subCategoryList, setSubCategoryList] = useState([]);

  /** 카테고리 클릭 함수 */
  const onClickCategory = (id, depth) => {
    const id_depth_1 = categoryList[0]?.children[0]?.id;
    if (id_depth_1 !== 0 && !id_depth_1) return;

    let changedList = [...categoryIdList];
    if (id) {
      changedList[depth] = id;
      changedList = changedList.slice(0, depth + 1);
    } else {
      changedList = changedList.slice(0, depth);
    }
    dispatch(
      setProductOptions({
        categoryIdList: changedList,
      }),
    );
  };

  const GenderBtnList = categoryList.map(category => (
    <GenderBtn
      key={category.id}
      isChecked={category.id === categoryIdList[0]}
      onClick={() => onClickCategory(category.id, 0)}
      message={category.name}
    />
  ));

  const CategoryBtnList = subCategoryList.map(category => (
    <CategoryBtn
      key={category.id}
      isChecked={categoryIdList.length > 1 && category.id === categoryIdList[1]}
      onClick={() => onClickCategory(category.id, 1)}
      message={category.name}
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
          isChecked={categoryIdList.length < 2}
          onClick={() => onClickCategory(null, 1)}
          message="전체"
        />
        {CategoryBtnList}
      </CategoryBtnWrapper>
    </Wrapper>
  );
};

export default CategoryBar;
