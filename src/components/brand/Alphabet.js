import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const Alphabet = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 1rem 0;

  ${media.small} {
    font-size: 24px;
    margin: 0 0 0.5rem 0;
    text-align: center;
  }
`;

export default Alphabet;
