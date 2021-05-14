import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import media, { mediaQuery } from 'lib/styles/media';
import palette from 'lib/styles/palette';

const Wrapper = ({ to, onClick, children }) => {
  return (
    <Container onClick={onClick}>
      <Btn to={to}>{children}</Btn>
    </Container>
  );
};

export const FakeWrapper = ({ children }) => {
  return (
    <Container>
      {children}
      <FakeBtn />
    </Container>
  );
};

const Container = styled.li`
  max-width: 230px;

  ${media.small} {
    max-width: 180px;
  }

  ${mediaQuery(400)} {
    max-width: 146px;
  }

  ${media.xsmall} {
    max-width: 130px;
  }
`;

const Btn = styled(Link)`
  display: flex;
  flex-direction: column;
  color: ${palette.black};
`;

const FakeBtn = styled.div`
  display: flex;
  flex-direction: column;
  height: 92px;
`;

export default Wrapper;
