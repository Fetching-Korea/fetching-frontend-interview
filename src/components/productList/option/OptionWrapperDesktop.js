import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// styles
import media from 'lib/styles/media';

const OptionWrapperDesktop = styled(LimitWidthLayout)`
  margin-top: 20px;

  ${media.small} {
    display: none;
  }
`;

export default OptionWrapperDesktop;
