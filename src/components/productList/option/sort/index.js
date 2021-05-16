// components
import SortWrapper from 'components/productList/option/sort/SortWrapper';
import SortIcon from 'components/productList/option/sort/SortIcon';
import SortBtn from 'components/productList/option/sort/SortBtn';
import ApplyBtn from 'components/productList/option/ApplyBtn';
import CancelBtn from 'components/productList/option/CancelBtn';

const SortOption = ({
  selectedId,
  sortList,
  onClick,
  isFiltered,
  onClickApply,
  onClickCancel,
}) => {
  const SortBtnList = sortList.map(sort => (
    <SortBtn
      key={sort.id}
      message={sort.name}
      onClick={() => onClick(sort.id)}
      isSelected={sort.id === selectedId}
    />
  ));

  return (
    <SortWrapper>
      <ul>
        <SortIcon />
        {SortBtnList}
      </ul>

      <div>
        {isFiltered && <CancelBtn onClick={onClickCancel}>필터링 전체 해제</CancelBtn>}
        <ApplyBtn onClick={onClickApply}>적용</ApplyBtn>
      </div>
    </SortWrapper>
  );
};

export default SortOption;
