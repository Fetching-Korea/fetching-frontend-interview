import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// lib
import media from 'lib/styles/media';

const Wrapper = styled(LimitWidthLayout)`
  display: none;
  width: 94vw;
  height: 32px;
  align-items: center;

  ${media.small} {
    display: flex;
  }
`;

export default Wrapper;
