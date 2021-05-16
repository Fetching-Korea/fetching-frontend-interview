import styled from 'styled-components';
// styles
import media from 'lib/styles/media';

const LimitWidthLayout = styled.div`
  width: 100%;
  max-width: 1140px;

  ${media.medium} {
    width: 94vw;
  }
`;

export default LimitWidthLayout;
