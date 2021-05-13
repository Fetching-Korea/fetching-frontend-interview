import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';

const CheckboxBtn = ({ message, isSelected, onClick }) => {
  return (
    <BtnWrapper>
      <Btn isSelected={isSelected} onClick={onClick}>
        {message}
      </Btn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.li`
  width: 180px;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 40px;
  }
`;

const Btn = styled.button`
  display: block;
  width: 100%;
  padding: 8px 0;
  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? palette.blue3 : palette.gray4)};
  border: ${({ isSelected }) =>
    isSelected ? `1px solid ${palette.blue3}` : `1px solid rgba(0,0,0,0)`};
  border-radius: 40px;
  transition: 0.1s ${styles.transition};
`;

export default CheckboxBtn;
