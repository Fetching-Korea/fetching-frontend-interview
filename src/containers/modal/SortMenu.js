import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// components
import Wrapper from 'components/modal/sortMenu/Wrapper';
import ItemBtn from 'components/modal/sortMenu/ItemBtn';
// styles
import { mediaValue } from 'lib/styles/media';
// modules
import { setProductOptions, clearProductList, getProductList } from 'modules/product';

export const SortMenu = ({ PreventModalOff, ModalOff }) => {
  const dispatch = useDispatch();

  const [isFlag, setIsFlag] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /** Bottom Sheet 열기/닫기 함수 */
  const onBottomSheet = bool => setIsOpen(bool);

  /** 모달 닫기 함수 */
  const onCloseModal = useCallback(() => {
    onBottomSheet(false);
    ModalOff();
  }, [ModalOff]);

  const onResize = useCallback(
    () => window.innerWidth > mediaValue.small && onCloseModal(),
    [onCloseModal],
  );

  /** 정렬 */
  const onClickSort = sortId => {
    dispatch(setProductOptions({ sort: sortId }));
    dispatch(clearProductList());
    dispatch(getProductList());
    setIsOpen(false);
  };

  /** 모바일 화면에서만 작동 */
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  useEffect(() => {
    window.setTimeout(() => {
      setIsOpen(true);
      setIsFlag(true);
    }, 100);
  }, [setIsOpen]);

  useEffect(() => {
    if (!isFlag) return;
    if (!isOpen) onCloseModal();
  }, [isFlag, isOpen, onCloseModal]);

  return (
    <Wrapper open={isOpen} onChange={onBottomSheet} onMouseDown={PreventModalOff}>
      <h1>정렬</h1>
      <ItemBtn onClick={() => onClickSort(0)}>최신순</ItemBtn>
      <ItemBtn onClick={() => onClickSort(1)}>할인율순</ItemBtn>
      <ItemBtn onClick={() => onClickSort(2)}>낮은가격순</ItemBtn>
      <ItemBtn onClick={() => onClickSort(3)}>높은가격순</ItemBtn>
    </Wrapper>
  );
};
