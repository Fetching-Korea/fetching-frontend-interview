import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// modules
import { getCategoryList, getBrandList } from 'modules/catalog';
import { setIsReady } from 'modules/app';

/**
 * 어플리케이션 초기 세팅 hook
 * - 어플리케이션 구동에 가장 필수적인 작업을 진행합니다.
 * @returns {boolean} 초기 작업 완료 여부
 */
const useInit = () => {
  const dispatch = useDispatch();

  const [isFullfilled, setIsFullfilled] = useState(false);

  /** UI에 필요한 Category/Brand API 호출 */
  useEffect(() => {
    Promise.all([dispatch(getCategoryList()), dispatch(getBrandList())]).then(() => {
      dispatch(setIsReady(true));
      setIsFullfilled(true);
    });
  }, [dispatch, setIsFullfilled]);

  return isFullfilled;
};

export default useInit;
