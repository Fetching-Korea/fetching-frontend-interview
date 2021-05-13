// components
import Wrapper from 'components/footer/Wrapper';
import MenuWrapper from 'components/footer/MenuWrapper';
import InfoWrapper from 'components/footer/InfoWrapper';
import MenuItemLink from 'components/footer/MenuItemLink';
import MenuItemBtn from 'components/footer/MenuItemBtn';
import VerticalBar from 'components/footer/VerticalBar';
import TopBtn from 'components/footer/TopBtn';
import DescriptionWrapper from 'components/footer/DescriptionWrapper';
import Logo from 'components/footer/Logo';
import Copyright from 'components/footer/Copyright';

const Footer = () => {
  const onMovePage = url => window.open(url, '_blank');

  return (
    <Wrapper>
      <MenuWrapper>
        <ul>
          <MenuItemLink to="/notice" message="공지사항" style={{ marginLeft: '0px' }} />
          <MenuItemLink to="/guide" message="가이드" />
          <MenuItemBtn
            onClick={() => {
              onMovePage(
                'https://play.google.com/store/apps/details?id=com.fetching.fetching&hl=ko',
              );
            }}
            message="앱 다운로드"
          />
          <MenuItemBtn
            onClick={() => {
              onMovePage('https://www.instagram.com/fetching_korea/');
            }}
            message="인스타그램"
          />
        </ul>
        <VerticalBar />
        <ul>
          <MenuItemLink
            to="/agreement"
            message="이용약관"
            style={{ marginLeft: '0px' }}
          />
          <MenuItemLink to="/privacy" message="개인정보처리방침" />
        </ul>

        <TopBtn />
      </MenuWrapper>

      <InfoWrapper>
        <Logo />
        {/* TODO 모바일에 한해서 열리고 닫히게 하기 */}
        <DescriptionWrapper>
          <h3>02-566-8045</h3>
          <p>평일 11:00~20:00 점심 13:00~14:00 (주말 및 공휴일 휴무)</p>
          <p>COMPANY: 주식회사 페칭</p>
          <p>NAME: 권용재</p>
          <p>TEL: 02-566-8045</p>
          <p>
            BUSINESS LICENSE: 325-81-01566
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=3258101566"
              style={{ color: '#ff6f61' }}
              target="_blank"
              rel="noreferrer"
            >
              [사업자정보확인]
            </a>
          </p>
          <p>ECOMMERCE LICENSE: 2020-서울관악-0296호</p>
          <p>ADDRESS: 서울특별시 관악구 관악로 158 (봉천동) BS TOWER</p>
        </DescriptionWrapper>
      </InfoWrapper>

      <Copyright>Copyright © NB. All Rights Reserved</Copyright>
    </Wrapper>
  );
};

export default Footer;
