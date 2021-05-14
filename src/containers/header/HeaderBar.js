import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
// components
import Wrapper from 'components/header/headerbar/Wrapper';
import LeftWrapper from 'components/header/headerbar/LeftWrapper';
import RightWrapper from 'components/header/headerbar/RightWrapper';
import Logo from 'components/header/headerbar/Logo';
import SearchBar from 'components/header/headerbar/SearchBar';
import IconBtn from 'components/header/headerbar/IconBtn';
import IconLink from 'components/header/headerbar/IconLink';
import BagBtn from 'components/header/headerbar/BagBtn';
// modules
import { pushModal } from 'modules/modal';

const HeaderBar = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const onSearch = useCallback(() => {
    if (!searchRef.current) return;
    if (searchRef.current.value === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    alert(`검색어: ${searchRef.current.value}`);
  }, [searchRef]);

  const onKeyUpSearch = ({ key }) => {
    if (key === 'Enter') {
      onSearch();
      return;
    }
  };

  const onClickMenu = () =>
    dispatch(
      pushModal({
        name: 'CategoryMenu',
      }),
    );

  return (
    <Wrapper>
      <LeftWrapper>
        <IconBtn type="MENU" onClick={onClickMenu} />
        <IconBtn type="SEARCH" onClick={() => {}} />
      </LeftWrapper>
      <Logo />
      <SearchBar
        placeholder="가정의 달 최대 50% 할인"
        onKeyUp={onKeyUpSearch}
        onSearch={onSearch}
        ref={searchRef}
      />
      <RightWrapper>
        <IconLink type="USER" to="/user" isHiddenMobile={true} />
        <IconLink type="HEART" to="/wish" />
        <BagBtn count={97} to="/busket" />
      </RightWrapper>
    </Wrapper>
  );
};

export default HeaderBar;
