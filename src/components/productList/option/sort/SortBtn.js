import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const SortBtn = ({ message, onClick, isSelected }) => {
  return (
    <Wrapper onClick={onClick}>
      <Btn isSelected={isSelected}>{message}</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.li``;

const Btn = styled.button`
  display: block;
  font-size: 12px;
  padding: 4px 8px;
  transition: 0.2s ${styles.transition};
  color: ${({ isSelected }) => (isSelected ? palette.orange4 : palette.gray5)};
  margin-right: 12px;
  z &:hover {
    color: ${palette.black};
  }
`;

export default SortBtn;
