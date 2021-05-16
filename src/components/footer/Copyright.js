import styled from 'styled-components';
// styles
import media from 'lib/styles/media';

const Copyright = styled.p`
  text-align: center;
  color: white;
  font-size: 12px;
  padding-top: 30px;

  ${media.small} {
    font-size: 10px;
  }
`;

export default Copyright;
