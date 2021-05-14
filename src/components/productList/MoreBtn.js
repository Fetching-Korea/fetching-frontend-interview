import styled, { css } from 'styled-components';
// icons
import { DownIcon } from 'lib/svg';
// styles
import palette from 'lib/styles/palette';
import * as styles from 'lib/styles/styles';
import animations from 'lib/styles/animations';

const MoreBtn = ({ onClick, isLoading }) => {
  const onClickBtn = () => {
    if (isLoading) return;
    onClick();
  };

  return (
    <Btn onClick={onClickBtn} isLoading={isLoading}>
      {!isLoading && <DownIcon />}
      <Message>{isLoading ? 'LOADING' : 'MORE VIEW'}</Message>
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: ${({ isLoading }) => (isLoading ? '140px' : '500px')};
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: ${({ isLoading }) => (isLoading ? palette.purple7 : palette.white)};
  border: 1px solid ${({ isLoading }) => (isLoading ? palette.purple7 : palette.gray4)};
  border-radius: 40px;
  transition: 0.4s ${styles.transition};
  ${({ isLoading }) =>
    isLoading
      ? css`
          animation: 2s ${animations.blink} infinite;
        `
      : ''}

  & > svg {
    transition: 0.2s ${styles.transition};
    width: 16px;
    height: 16px;
    margin-right: 8px;
    opacity: 0.5;
  }

  &:hover {
    border: 1px solid ${palette.purple7};

    & > svg {
      opacity: 1;
    }

    & > span {
      color: ${palette.purple7};
    }
  }
`;

const Message = styled.span`
  font-size: 12px;
  color: ${palette.gray5};
  text-align: center;
  transition: 0.2s ${styles.transition};
  ${styles.noselect}
`;

export default MoreBtn;
