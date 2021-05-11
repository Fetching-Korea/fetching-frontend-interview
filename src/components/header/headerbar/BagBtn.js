import { Link } from 'react-router-dom';
import styled from 'styled-components';
// icons
import { BagIcon } from 'lib/svg';
// lib
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const IconBtn = ({ count, to }) => {
  return (
    <Btn to={to}>
      <BagIcon />
      <Count>{count}</Count>
    </Btn>
  );
};

const Btn = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  opacity: 0.6;

  & > svg {
    width: 30px;
    height: 30px;

    ${media.small} {
      width: 25px;
      height: 26px;
    }
  }
`;

const Count = styled.span`
  position: absolute;
  text-align: center;
  width: 24px;
  height: 10px;
  font-size: 10px;
  font-weight: 600;
  left: 0;
  right: 0%;
  top: 0;
  bottom: 0;
  margin: auto;
  color: ${palette.orange4};
`;

export default IconBtn;
