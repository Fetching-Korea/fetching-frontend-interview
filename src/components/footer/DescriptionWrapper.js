import styled from 'styled-components';
// styles
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const DescriptionWrapper = styled.div`
  width: auto;
  flex: 1;

  ${media.small} {
    margin: auto;
  }

  & > * {
    color: ${palette.white};
  }

  & > h3 {
    font-size: 32px;
    line-height: 16px;
    margin: 0 0 2rem 0;

    ${media.small} {
      font-size: 14px;
      line-height: auto;
      margin: 0 0 0.5rem 0;
      text-align: center;
    }
  }

  & > p {
    margin: 0 0 0.5rem 0;

    ${media.small} {
      font-size: 12px;
      line-height: auto;
      margin: auto;
      text-align: center;
    }

    & > a {
      margin-left: 4px;

      ${media.small} {
        font-size: 12px;
      }
    }
  }
`;

export default DescriptionWrapper;
