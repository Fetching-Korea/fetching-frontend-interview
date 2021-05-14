import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: auto;
  min-width: 400px;
  max-height: 200px;
  height: 100%;
  overflow-y: auto;
  ${styles.scrollbar(8)};

  ${media.small} {
    width: 100%;
    min-width: auto;
    min-height: 240px;
    border-bottom: 1px solid ${palette.gray2};
    margin-bottom: 20px;
  }
`;

export default Wrapper;
