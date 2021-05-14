import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
// icons
import { BackIcon } from 'lib/svg';
import { transition, noselect } from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const BackBtn = () => {
  const history = useHistory();

  const onGoBack = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <Btn onClick={onGoBack}>
        <BackIcon />
        <span>돌아가기</span>
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.button``;

const Btn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 0.8rem;
  line-height: 26px;
  margin: 15px auto;
  padding: 0 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ${transition};
  ${noselect}
  border-radius: 40px;

  &:hover,
  &:active {
    background-color: ${palette.gray1};
  }

  & > span {
    margin-left: 1rem;
  }
`;

export default BackBtn;
