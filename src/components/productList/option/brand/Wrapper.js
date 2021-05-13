import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';

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
`;

export default Wrapper;
