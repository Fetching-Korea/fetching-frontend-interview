import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import media, { mediaValue } from 'lib/styles/media';

const MenuItemBtn = ({ message, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Btn>{message}</Btn>
    </Container>
  );
};

const Container = styled.li``;

const Btn = styled.button`
  display: block;
  box-sizing: border-box;
  height: 60px;
  font-size: 14px;
  line-height: 52px;
  padding: 4px 0;
  margin: 0 12px;
  color: ${palette.gray3};
  transition: 0.1s ${styles.transition};

  ${media.medium} {
    height: 50px;
    line-height: 42px;
    color: ${palette.white};
  }

  ${media.small} {
    font-size: 12px;
    height: 32px;
    line-height: 24px;
    margin: auto;
  }

  @media (min-width: ${mediaValue.medium}px) {
    &:hover {
      color: ${palette.white};
    }
  }
`;

export default MenuItemBtn;
