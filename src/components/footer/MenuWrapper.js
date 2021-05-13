import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// styles
import media from 'lib/styles/media';

const MenuWrapper = styled(LimitWidthLayout)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > ul {
    display: flex;
    align-items: center;
  }

  ${media.medium} {
    display: block;
    padding-top: 14px;
  }

  ${media.small} {
    display: block;

    & > ul {
      display: block;
    }
  }
`;

export default MenuWrapper;
