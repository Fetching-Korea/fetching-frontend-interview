import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 100%;
  overflow-y: auto;
  ${styles.scrollbar(8)};
`;

export default Wrapper;
