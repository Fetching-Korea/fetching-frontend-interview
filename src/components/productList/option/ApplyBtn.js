import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';
import media, { mediaValue } from 'lib/styles/media';

const ApplyBtn = styled.button`
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${palette.white};
  background-color: ${palette.orange4};
  opacity: 0.8;
  transition: 0.2s ${styles.transition};
  ${styles.noselect};

  @media (min-width: ${mediaValue.small}px) {
    &:hover {
      opacity: 1;
    }
  }

  ${media.small} {
    height: 40px;
    flex-grow: 1;
    font-weight: 500;

    &:active {
      opacity: 1;
    }
  }
`;

export default ApplyBtn;
