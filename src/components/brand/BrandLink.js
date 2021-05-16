import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import palette from 'lib/styles/palette';
import media, { mediaQuery } from 'lib/styles/media';

const BrandLink = ({ to, message, onClick }) => {
  return (
    <BtnContainer onClick={onClick}>
      <Btn to={to}>{message}</Btn>
    </BtnContainer>
  );
};

const BtnContainer = styled.li`
  width: 20%;
  height: 100%;

  & > a {
    color: ${palette.black};
  }

  ${media.medium} {
    width: 25%;
  }

  ${mediaQuery(933)} {
    width: 33.33%;
  }

  ${media.small} {
    width: 100%;
    text-align: center;
  }
`;

const Btn = styled(Link)`
  display: block;
  height: 100%;
  font-size: 14px;
  padding: 4px 2rem;
  box-sizing: border-box;
  line-height: 32px;
`;

export default BrandLink;
