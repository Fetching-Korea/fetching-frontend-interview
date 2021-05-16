import styled from 'styled-components';
// lib'
import * as styles from 'lib/styles/styles';
import media from 'lib/styles/media';

const Title = ({ children }) => {
  return <Content>{children}</Content>;
};

const Content = styled.div`
  position: relative;
  width: 80vw;
  font-size: 3rem;
  font-weight: bold;
  padding: 30vh 0 0.5rem 0;
  margin: 0 0 1rem 5vw;
  color: white;
  border-bottom: 0.5px solid white;
  transition: width 0.3s ${styles.transition} ease;

  ${media.small} {
    font-size: 1.8rem;
    padding: 15vh 0 0.5rem 0;
  }

  ${media.xsmall} {
    width: 90vw;
  }
`;

export default Title;
