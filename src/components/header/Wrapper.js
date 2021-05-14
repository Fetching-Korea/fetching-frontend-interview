import styled from 'styled-components';
// lib
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';
import zIndex from 'lib/styles/zIndex';

const Wrapper = styled.header`
  width: 100%;
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.4s ${styles.transition} ease-in-out;
  z-index: ${zIndex.header};

  ${media.small} {
    position: sticky;
    top: -48px;
  }
`;

export default Wrapper;
