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
  &:nth-child(1) > a {
    padding: 4px 12px 4px 0;
  }

  & > a {
    color: ${({ isHighlight }) => (isHighlight ? palette.red4 : palette.black)};
  }
`;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  padding: 4px 12px;
  transition: 0.2s ${styles.transition};
  transform: translateY(0px);
`;

export default TopLink;
