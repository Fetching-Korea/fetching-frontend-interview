import styled from 'styled-components';
// lib
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const Wrapper = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${palette.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.small} {
    height: 48px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.medium} {
    width: 94vw;
    margin: auto;
  }
`;

export default Wrapper;
