import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const TopLink = ({ to, message, isHighlight = false }) => {
  return (
    <Wrapper isHighlight={isHighlight}>
      <Btn to={to}>{message}</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  & > a {
    color: ${({ isHighlight }) => (isHighlight ? palette.red4 : palette.black)};
  }
`;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  padding: 4px 20px;
  transition: 0.2s ${styles.transition};
  transform: translateY(0px);

  &:nth-child(1) {
    padding: 4px 20px 4px 0;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export default TopLink;
