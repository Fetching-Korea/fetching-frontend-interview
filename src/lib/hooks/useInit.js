import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// modules
import { setProductOptions } from 'modules/product';
import { getCategoryList, getBrandList } from 'modules/catalog';
import { setIsReady } from 'modules/app';

/**
 * 어플리케이션 초기 세팅 hook
 * - 어플리케이션 구동에 가장 필수적인 작업을 진행합니다.
 * @returns {boolean} 초기 작업 완료 여부
 */
const useInit = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(state => state.catalog.categoryList);

  const [isFullfilled, setIsFullfilled] = useState(false);

  /** UI에 필요한 Category/Brand API 호출 */
  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getBrandList());
  }, [dispatch]);

  /** 초기 카테고리 선택 (최소 Depth 0 ~ 1) */
  useEffect(() => {
    if (!categoryList) return;

    const categoryId_depth_0 = categoryList[0]?.id;
    const categoryId_depth_1 = categoryList[0]?.children[0]?.id;

    if (
      (categoryId_depth_0 !== 0 && !categoryId_depth_0) ||
      (categoryId_depth_1 !== 0 && !categoryId_depth_1)
    )
      return;

    dispatch(
      setProductOptions({
        categoryList: [categoryId_depth_0, categoryId_depth_1],
      }),
    );
    dispatch(setIsReady(true));
    setIsFullfilled(true);
  }, [dispatch, setIsFullfilled, categoryList]);

  return isFullfilled;
};

export default useInit;
