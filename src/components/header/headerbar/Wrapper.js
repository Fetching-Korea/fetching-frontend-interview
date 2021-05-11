import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.medium} {
    width: 94vw;
    margin: auto;
  }

  ${media.small} {
    height: 48px;
  }
`;

export default Wrapper;
