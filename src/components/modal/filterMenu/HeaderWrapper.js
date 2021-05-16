import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${palette.white};

  & > div {
    display: flex;
  }
`;

export default HeaderWrapper;
