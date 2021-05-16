import styled from 'styled-components';
// lib
import * as styles from 'lib/styles/styles';
import zIndex from 'lib/styles/zIndex';
import animations from 'lib/styles/animations';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${zIndex.modal};
  animation: ${animations.fadeIn} 0.3s;
  transition: 0.2s ${styles.transition};
  background-color: ${({ isClose }) =>
    isClose ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.6)'};
`;

export default Background;
