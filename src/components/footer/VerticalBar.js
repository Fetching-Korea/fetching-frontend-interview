import styled from 'styled-components';
// lib
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const VerticalBar = styled.div`
  width: 2px;
  height: 32px;
  background-color: ${palette.gray7};
  margin: 0 24px 0 12px;
  margin-top: 4px;

  ${media.medium} {
    display: none;
  }
`;

export default VerticalBar;
