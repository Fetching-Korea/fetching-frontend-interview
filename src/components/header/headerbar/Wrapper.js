import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// lib
import media from 'lib/styles/media';

const Wrapper = styled(LimitWidthLayout)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.small} {
    height: 48px;
  }
`;

export default Wrapper;
