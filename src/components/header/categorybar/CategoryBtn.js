import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const CategoryBtn = ({ to, message, isChecked }) => {
  return (
    <BtnContainer isChecked={isChecked}>
      <Btn to={to}>{message}</Btn>
    </BtnContainer>
  );
};

const BtnContainer = styled.li`
  & > a {
    color: ${({ isChecked }) => (isChecked ? palette.orange4 : palette.black)};

    ${media.small} {
      color: ${({ isChecked }) => (isChecked ? palette.black : palette.gray4)};
    }
  }

  &:nth-child(1) > a {
    padding: 4px 12px 4px 0;
  }
`;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 32px;
  height: 40px;
  padding: 4px 12px;
  box-sizing: border-box;
  transition: 0.2s ${styles.transition} ease-in-out;
`;

export default CategoryBtn;
