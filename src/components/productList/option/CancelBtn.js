import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';

const CancelBtn = styled.button`
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${palette.orange4};
  color: ${palette.orange4};
  margin-right: 1rem;
  opacity: 0.8;
  transition: 0.2s ${styles.transition};
  ${styles.noselect};

  &:hover {
    opacity: 1;
  }
`;

export default CancelBtn;
