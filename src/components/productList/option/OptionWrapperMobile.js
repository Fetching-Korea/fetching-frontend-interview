import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// styles
import media from 'lib/styles/media';

const OptionWrapperMobile = styled(LimitWidthLayout)`
  display: none;
  margin-top: 20px;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }

  ${media.small} {
    display: block;
  }
`;

export default OptionWrapperMobile;
