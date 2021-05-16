import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const CategoryLinkWrapper = styled.ul`
  display: flex;
  align-items: center;

  ${media.small} {
    display: none;
  }
`;

export default CategoryLinkWrapper;
