import styled from 'styled-components';
// icons
import { MenuIcon, SearchIcon } from 'lib/svg';
// lib
import media from 'lib/styles/media';

const IconBtn = ({ type, onClick }) => {
  return (
    <Btn onClick={onClick}>
      {type === 'MENU' && <MenuIcon />}
      {type === 'SEARCH' && <SearchIcon />}
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 1rem;

  & > svg {
    width: 24px;
    height: 32px;

    ${media.small} {
      width: 24px;
      height: 24px;
    }
  }

  ${media.small} {
    margin-right: 8px;
  }
`;

export default IconBtn;
