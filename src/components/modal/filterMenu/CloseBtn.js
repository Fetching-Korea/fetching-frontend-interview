import styled from 'styled-components';
// icons
import { BackIcon } from 'lib/svg';

const CloseBtn = ({ onClick }) => {
  return (
    <Btn onClick={onClick}>
      <BackIcon />
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export default CloseBtn;
