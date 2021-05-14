import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import media from 'lib/styles/media';

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 100%;
  overflow-y: auto;
  ${styles.scrollbar(8)};

  ${media.small} {
    height: auto;
    max-height: 200px;
    margin-bottom: 100px;
  }
`;

export default Wrapper;
