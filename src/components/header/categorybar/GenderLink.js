import styled from 'styled-components';
import { Link } from 'react-router-dom';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const GenderLink = ({ to, message, isChecked }) => {
  return (
    <BtnContainer isChecked={isChecked}>
      <Btn to={to}>{message}</Btn>
    </BtnContainer>
  );
};

const BtnContainer = styled.li`
  & > a {
    color: ${({ isChecked }) => (isChecked ? palette.orange4 : palette.black)};
  }

  &:nth-child(1) > a {
    padding: 4px 12px 4px 0;

    ${media.small} {
      padding: 4px 12px;
    }
  }

  ${media.small} {
    flex: 1;
    margin-bottom: -1px;
    border-bottom: ${({ isChecked }) =>
      isChecked ? `2px solid ${palette.orange4}` : `2px solid rgba(0,0,0,0)`};
  }
`;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  padding: 4px 12px;
  transition: 0.2s ${styles.transition};

  ${media.small} {
    text-align: center;
  }
`;

export default GenderLink;
