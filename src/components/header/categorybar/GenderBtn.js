import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const GenderBtn = ({ isChecked, onClick, message }) => {
  return (
    <li>
      <Btn isChecked={isChecked} onClick={onClick}>
        {message}
      </Btn>
    </li>
  );
};

const Btn = styled.button`
  font-size: 14px;
  height: 32px;
  padding: 4px 24px;
  transition: 0.2s ${styles.transition};
  color: ${({ isChecked }) => (isChecked ? palette.orange4 : palette.black)};

  &:nth-child(1) {
    padding: 4px 24px 4px 0;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export default GenderBtn;
