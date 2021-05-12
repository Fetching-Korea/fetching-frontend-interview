import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// modules
import { setProductOptions } from 'modules/product';

/**
 * 상품 목록 페이지 세팅 hook
 * - 자동 상품 선택 작업을 진행합니다.
 */
const useCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryList = useSelector(state => state.catalog.categoryList);
  const { category0, category1, category2 } = useParams();

  /** 파라미터으로부터 카테고리 ID 적용 작업 */
  useEffect(() => {
    if (categoryList.length === 0) return;

    const filtered = [category0, category1, category2].filter(v => v);
    const result = filtered.map(v => Number(v));

    /** 0 Depth 카테고리가 선택되지 않을 경우, 자동 선택 작업 */
    if (result.length === 0 || isNaN(Number(category0))) {
      return history.push(`/productList/${categoryList[0].id}`);
    } else {
      dispatch(
        setProductOptions({
          categoryIdList: result,
        }),
      );
    }
  }, [dispatch, history, categoryList, category0, category1, category2]);

  return null;
};

export default useCategory;
