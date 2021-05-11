import React, { useState } from 'react';
import styled from 'styled-components';
// icons
import { SearchIcon } from 'lib/svg';
// lib
import media from 'lib/styles/media';
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const SearchBar = ({ placeholder, onKeyUp, onSearch }, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  return (
    <Wrapper isFocus={isFocus}>
      <Input
        type="text"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        ref={ref}
      />
      <Btn onClick={onSearch} isFocus={isFocus}>
        <Icon />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  max-width: 320px;
  display: flex;
  align-items: center;
  transition: 0.1s ${styles.transition};
  margin-left: 60px;
  margin-right: 2rem;
  border-radius: 42px;
  border: ${props =>
    props.isFocus ? `1px solid ${palette.black}` : `1px solid ${palette.gray3}`};

  ${media.small} {
    display: none;
  }
`;

const Input = styled.input`
  width: auto;
  height: 36px;
  flex-grow: 1;
  margin-left: 16px;
  margin-right: 8px;
  outline: none;

  &::placeholder {
    color: ${palette.gray4};
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  transition: 0.1s ${styles.transition};
  opacity: ${props => (props.isFocus ? 1 : 0.5)};
`;

const Icon = styled(SearchIcon)`
  width: 18px;
  height: 18px;
`;

export default React.forwardRef(SearchBar);
