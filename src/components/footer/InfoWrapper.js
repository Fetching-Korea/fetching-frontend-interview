import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// styles
import media from 'lib/styles/media';

const InfoWrapper = styled(LimitWidthLayout)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 30px;

  ${media.small} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default InfoWrapper;
