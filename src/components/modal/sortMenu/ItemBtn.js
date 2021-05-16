import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';

const ItemBtn = styled.button`
  width: 90%;
  color: ${palette.gray6};
  font-weight: 500;
  padding: 8px 0;
  transition: 0.2s ${styles.transition};
  border-radius: 8px;

  &:active {
    background-color: ${palette.gray0};
  }
`;

export default ItemBtn;
