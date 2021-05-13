import styled from 'styled-components';
// lib
import media from 'lib/styles/media';
import palette from 'lib/styles/palette';

const AlphabetBtn = ({ message, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Btn>{message}</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: auto;
  flex: 1;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${media.medium} {
    max-width: 40px;
  }

  &:hover > button {
    color: ${palette.black};
  }
`;

const Btn = styled.button`
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${palette.gray4};

  ${media.small} {
    font-size: 14px;
  }
`;

export default AlphabetBtn;
