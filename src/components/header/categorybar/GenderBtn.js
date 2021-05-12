import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const GenderBtn = ({ to, message, isChecked }) => {
  return (
    <BtnContainer isChecked={isChecked}>
      <Btn to={to}>{message}</Btn>
    </BtnContainer>
  );
};

const BtnContainer = styled.li`
  & > a {
    color: ${({ isChecked }) => (isChecked ? palette.orange4 : palette.black)};
  }

  &:nth-child(1) > a {
    padding: 4px 12px 4px 0;
  }
`;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  padding: 4px 12px;
  transition: 0.2s ${styles.transition};
`;

export default GenderBtn;
