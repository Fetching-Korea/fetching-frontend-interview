import styled from 'styled-components';
// icons
import { CloseIcon } from 'lib/svg';
// styles
import palette from 'lib/styles/palette';

/**
 * @param {object} props
 * @param {("BRAND" | "PRICE")} props.type 버튼 타입
 * @param {string} props.message 버튼명
 * @param {Function} props.onClick 버튼 클릭 함수
 */
const FilteredBtn = ({ type, message, onClick }) => {
  const name = type === 'BRAND' ? '브랜드' : '가격';

  return (
    <Wrapper>
      <Btn onClick={onClick}>
        <span>
          {name}: {message}
        </span>
        <CloseIcon />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  &:last-child {
    & > button {
      margin-right: 0;
    }
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid ${palette.blue3};
  border-radius: 40px;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  & > span {
    color: ${palette.blue3};
    font-size: 14px;
  }

  & > svg {
    width: 8px;
    height: 8px;
    margin-left: 8px;
    filter: invert(53%) sepia(20%) saturate(5106%) hue-rotate(192deg) brightness(102%)
      contrast(102%);
  }
`;

export default FilteredBtn;
