import styled from 'styled-components';
// icons
import { FilterIcon, SortIcon } from 'lib/svg';
// styles
import palette from 'lib/styles/palette';

/**
 * @param {object} props
 * @param {("FILTER" | "SORT")} props.type 버튼 타입
 * @param {string} props.message 버튼명
 * @param {Function} props.onClick 버튼 클릭 함수
 */
const FilterBtn = ({ type, message, onClick }) => {
  const Icon = type === 'FILTER' ? FilterIcon : SortIcon;

  return (
    <Wrapper>
      <Btn onClick={onClick}>
        <span>{message}</span>
        <Icon />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.li``;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 8px 0 12px;
  border: 1px solid ${palette.gray4};
  border-radius: 40px;
  margin-right: 1rem;
  cursor: pointer;

  & > span {
    color: ${palette.gray5};
    font-size: 14px;
    font-weight: 500;
  }

  & > svg {
    width: 30px;
    height: 30px;
    margin-left: 2px;
  }
`;

export default FilterBtn;
