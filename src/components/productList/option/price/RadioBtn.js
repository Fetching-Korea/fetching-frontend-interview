import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';

const RadioBtn = ({ message, isSelected, onClick }) => {
  return (
    <BtnWrapper>
      <Btn isSelected={isSelected} onClick={onClick}>
        {message}
      </Btn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.li`
  &:last-child {
    margin-bottom: 40px;
  }
`;

const Btn = styled.button`
  display: block;
  padding: 8px 0;
  width: 200px;
  font-size: 14px;
  margin: 0 auto 8px auto;
  color: ${({ isSelected }) => (isSelected ? palette.blue3 : palette.gray4)};
  border: ${({ isSelected }) =>
    isSelected ? `1px solid ${palette.blue3}` : `1px solid rgba(0,0,0,0)`};
  border-radius: 40px;
  transition: 0.1s ${styles.transition};
`;

export default RadioBtn;
