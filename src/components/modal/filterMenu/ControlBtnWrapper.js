import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const ControlBtnWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top: 1px solid ${palette.gray2};
`;

export default ControlBtnWrapper;
