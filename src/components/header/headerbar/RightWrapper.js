import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const LeftWrapper = styled.ul`
  display: flex;
  width: auto;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;

  ${media.small} {
    height: 48px;
  }
`;

export default LeftWrapper;
