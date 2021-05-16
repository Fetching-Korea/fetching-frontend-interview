import styled from 'styled-components';
// lib
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import animations from 'lib/styles/animations';

const SubCategoryWrapper = styled.ul`
  position: absolute;
  width: 200px;
  padding: 8px;
  margin-top: -8px;
  background-color: ${palette.white};
  box-shadow: ${styles.boxShadow.regular};
  z-index: 1;
  animation: 0.3s ${animations.fadeIn};
`;

export default SubCategoryWrapper;
