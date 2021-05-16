import { Link } from 'react-router-dom';
import styled from 'styled-components';
// icons
import { HangerIcon, HeartIcon } from 'lib/svg';
// lib
import media from 'lib/styles/media';

const IconLink = ({ type, to, isHiddenMobile = false }) => {
  return (
    <Wrapper isHiddenMobile={isHiddenMobile}>
      <Btn to={to}>
        {type === 'USER' && <HangerIcon />}
        {type === 'HEART' && <HeartIcon />}
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  ${media.small} {
    display: ${({ isHiddenMobile }) => (isHiddenMobile ? 'none' : '')};
    margin-right: 8px;
  }
`;

const Btn = styled(Link)`
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

export default IconLink;
