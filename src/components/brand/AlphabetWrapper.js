import styled from 'styled-components';
// lib
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const AlphabetWrapper = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1140px;
  background-color: white;
  border-bottom: 1px solid ${palette.gray2};
  padding: 10px 0;
  margin-top: 10px;

  ${media.medium} {
    overflow-x: auto;
    width: 94vw;

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }

  ${media.small} {
    padding-bottom: 0px;
    height: 40px;
    flex-wrap: inherit;
  }
`;

export default AlphabetWrapper;