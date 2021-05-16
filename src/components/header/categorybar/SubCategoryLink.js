import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const SubCategoryLink = ({ to, message }) => {
  return (
    <BtnContainer>
      <Btn to={to}>{message}</Btn>
    </BtnContainer>
  );
};

const BtnContainer = styled.li``;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 32px;
  height: 40px;
  padding: 4px 12px;
  border-radius: 8px;
  box-sizing: border-box;
  transition: 0.1s ${styles.transition};
  background-color: ${palette.white};
  color: ${palette.black};

  &:hover {
    background-color: ${palette.gray0};
  }
`;

export default SubCategoryLink;
