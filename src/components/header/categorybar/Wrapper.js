import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;

  ${media.medium} {
    width: 94vw;
    margin: auto;
  }
`;

export default Wrapper;
