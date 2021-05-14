import styled, { css } from 'styled-components';
// styles
import animations from 'lib/styles/animations';
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 3vw;
  top: 0;
  left: 0;
  background-color: ${palette.white};
  box-shadow: ${styles.boxShadow.regular};
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: 0.6s ${animations.fadeInLeft};
        `
      : css`
          animation: 0.6s ${animations.fadeOutLeft};
        `}
  overflow-y: auto;
  ${styles.scrollbar(0)};
`;

export default Wrapper;
