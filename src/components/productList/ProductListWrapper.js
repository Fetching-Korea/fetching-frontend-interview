import styled from 'styled-components';
// components
import LimitWidthLayout from 'components/layout/LimitWidthLayout';
// styles
import media, { mediaQuery } from 'lib/styles/media';

const ProductListWrapper = styled(LimitWidthLayout)`
  height: auto;
  min-height: 1000px;
  flex-grow: 1;
  margin-top: 20px;
  margin-bottom: 140px;

  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 230px);
    grid-template-rows: 1fr;
    gap: 1rem;
    justify-content: space-between;

    ${media.small} {
      grid-template-columns: repeat(auto-fit, 180px);
      justify-content: space-around;
    }

    ${mediaQuery(400)} {
      grid-template-columns: repeat(auto-fit, 146px);
    }

    ${media.xsmall} {
      grid-template-columns: repeat(auto-fit, 130px);
    }
  }
`;

export default ProductListWrapper;
