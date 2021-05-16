import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoIcon } from 'lib/svg';
// lib
import media from 'lib/styles/media';

const Logo = () => {
  return (
    <Btn to="/">
      <Svg />
    </Btn>
  );
};

const Svg = styled(LogoIcon)`
  display: block;
  width: auto;
  height: 34px;

  ${media.small} {
    height: 16px;
  }
`;

const Btn = styled(Link)`
  display: block;
`;

export default Logo;
