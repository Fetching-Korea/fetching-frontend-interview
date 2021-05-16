import styled from 'styled-components';
// styles
import media from 'lib/styles/media';

const TopWrapper = styled.div`
  display: flex;
  align-items: center;

  ${media.small} {
    display: none;
  }
`;

export default TopWrapper;
