import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const BrandWrapper = styled.ul`
  width: 100%;
  max-width: 1140px;
  margin-bottom: 100px;

  ${media.medium} {
    width: 94vw;
    margin: auto;
    margin-bottom: 100px;
  }
`;

export default BrandWrapper;