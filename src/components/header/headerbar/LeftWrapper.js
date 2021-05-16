import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const LeftWrapper = styled.ul`
  display: none;
  width: auto;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;

  ${media.small} {
    display: flex;
    height: 48px;
  }
`;

export default LeftWrapper;
