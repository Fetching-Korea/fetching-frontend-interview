import styled from 'styled-components';
import { Link } from 'react-router-dom';
// lib
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import { mediaQuery } from 'lib/styles/media';

const CategoryLink = ({ to, message }) => {
  return (
    <Container>
      <CategoryBtn to={to}>{message}</CategoryBtn>
    </Container>
  );
};

const Container = styled.li`
  width: auto;
  min-width: 140px;
  max-width: 12.5%;
  flex: 1;

  ${mediaQuery(1191)} {
    max-width: 14.28%;
  }

  ${mediaQuery(1042)} {
    max-width: 16.66%;
  }

  ${mediaQuery(893)} {
    max-width: 20%;
  }
`;

const CategoryBtn = styled(Link)`
  display: block;
  position: relative;
  width: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: ${palette.black};
  font-size: 12px;
  transition: 0.1s ${styles.transition} ease;

  &:hover {
    transform: scale(1.1);
    color: black;
  }
`;

export default CategoryLink;
