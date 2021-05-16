import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const GenderLinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${palette.gray2};
  margin-bottom: 20px;
`;

export default GenderLinkWrapper;
