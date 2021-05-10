import { Link } from 'react-router-dom';
import styled from 'styled-components';
// lib
import * as styles from 'lib/styles/styles';
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const Btn = styled(Link)`
  display: inline-block;
  padding: 6px 32px;
  border-radius: 40px;
  border: 1px solid ${palette.white};
  transition: 0.2s ${styles.transition};
  background-color: rgba(0, 0, 0, 0);
  color: ${palette.white};
  margin: 1rem 0 1.4rem 2rem;

  &:nth-child(1) {
    margin-left: 5vw;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: ${palette.white};
    color: ${palette.teal4};
  }

  ${media.small} {
    margin: 0.4rem 0 1.2rem 1.4rem;
    padding: 8px 24px;
  }

  ${media.xsmall} {
    margin: 0.4rem 0 1.2rem 0.8rem;
    padding: 8px 16px;
  }
`;

export default Btn;
