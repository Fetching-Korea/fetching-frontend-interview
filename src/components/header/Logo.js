import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoIcon } from 'lib/svg';

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
`;

const Btn = styled(Link)`
  display: block;
`;

export default Logo;
