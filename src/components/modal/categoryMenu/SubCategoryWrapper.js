import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const SubCategoryWrapper = ({ isOpen, children }) => {
  return <Wrapper isOpen={isOpen}>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  width: 100%;
  height: auto;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0px')};
  box-sizing: border-box;
  padding-left: 2rem;
  transition: 0.4s ${styles.transition};
  overflow: hidden;
  background-color: ${palette.gray0};
`;

export default SubCategoryWrapper;
