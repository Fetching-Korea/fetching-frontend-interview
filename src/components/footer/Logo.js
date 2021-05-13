import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoIcon } from 'lib/svg';
// lib
import media from 'lib/styles/media';

const Logo = () => {
  return (
    <Wrapper>
      <Btn to="/">
        <Svg />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  max-width: 300px;

  ${media.small} {
    margin: auto;
    margin-bottom: 2rem;
  }
`;

const Svg = styled(LogoIcon)`
  display: block;
  width: auto;
  height: 28px;
  filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(192deg) brightness(104%)
    contrast(107%);

  ${media.small} {
    height: 18px;
    margin: auto;
  }
`;

const Btn = styled(Link)`
  display: block;
`;

export default Logo;
