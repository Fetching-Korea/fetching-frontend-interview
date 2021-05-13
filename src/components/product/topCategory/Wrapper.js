import styled from 'styled-components';
// lib
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 2rem 0 1rem 0;
  margin: 0 auto;
  border-bottom: 1px solid ${palette.gray2};

  ${media.medium} {
    width: 94vw;
  }

  ${media.small} {
    display: none;
  }
`;

export default Wrapper;
