import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const Wrapper = styled.div`
  display: none;
  width: 94vw;
  height: 32px;
  align-items: center;

  ${media.small} {
    display: flex;
  }
`;

export default Wrapper;
