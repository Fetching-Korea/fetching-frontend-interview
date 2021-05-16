import styled from 'styled-components';
import { Link } from 'react-router-dom';
// icons
import { RightIcon } from 'lib/svg';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const SubCategoryLink = ({ to, message, onClick }) => {
  return (
    <>
      <BtnContainer>
        <Btn to={to} onClick={onClick}>
          {message}
        </Btn>
        <RightIcon />
      </BtnContainer>
    </>
  );
};

const BtnContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 12px;
    height: 12px;
    opacity: 0.6;
    margin-right: 20px;
  }
`;

const Btn = styled(Link)`
  flex: 1;
  display: block;
  font-size: 14px;
  line-height: 32px;
  height: 40px;
  padding: 4px 12px;
  box-sizing: border-box;
  transition: 0.2s ${styles.transition} ease-in-out;
  color: ${palette.black};
`;

export default SubCategoryLink;
