import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';
import media, { mediaValue } from 'lib/styles/media';

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

  @media (min-width: ${mediaValue.small}px) {
    &:hover {
      opacity: 1;
    }
  }

  ${media.small} {
    flex-grow: 1;
    height: 40px;
    margin-top: 2px;
    border: 1px solid ${palette.gray4};
    color: ${palette.gray5};

    &:active {
      border: 1px solid ${palette.orange4};
      color: ${palette.orange4};
    }
  }
`;

export default CancelBtn;
