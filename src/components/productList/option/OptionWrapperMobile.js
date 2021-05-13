import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// styles
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const OptionWrapperMobile = styled(LimitWidthLayout)`
  display: none;
  margin-top: 20px;
  border-bottom: 1px solid ${palette.gray2};

  & > ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 8px;
  }

  ${media.small} {
    display: block;
  }
`;

export default OptionWrapperMobile;
