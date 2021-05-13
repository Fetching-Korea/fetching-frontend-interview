import styled from 'styled-components';
// lib
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const TopBtn = () => {
  const onClick = () => {
    document.scrollingElement.scrollTop = 0;
  };

  return <Btn onClick={onClick}>TOP</Btn>;
};

const Btn = styled.button`
  position: absolute;
  right: 0;
  top: 14px;
  height: 32px;
  line-height: 22px;
  box-sizing: border-box;
  padding: 4px 0;
  font-size: 12px;
  font-weight: 500;
  color: ${palette.white};
  transition: 0.2s ${styles.transition};

  &:hover {
    padding: 4px 4px 4px 0;
  }

  ${media.small} {
    display: none;
  }
`;

export default TopBtn;
