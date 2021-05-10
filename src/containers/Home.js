// components
import Section from 'components/home/Section';
import Title from 'components/home/Title';
import Post from 'components/home/Post';
import Btn from 'components/home/Btn';

const Home = () => {
  return (
    <Section>
      <Title>Fetching 사전 과제</Title>

      <div>
        <Btn to="/productList">상품 목록 페이지</Btn>
        <Btn to="/brands">브랜드 페이지</Btn>
      </div>

      <Post>
        해당 과제는 <strong>김형석</strong> 으로부터 작성되었습니다.
      </Post>
      <Post>React, Redux, styled-components을 사용하여 구현하였습니다.</Post>
      <Post>반응형은 Deskotp/Table 또는 Mobile(으)로 구현하였습니다.</Post>
      <Post>
        더 자세한 설명을 보시려면 다음{' '}
        <a href="https://github.com/altmshfkgudtjr/fetching-frontend-interview/blob/master/README.md">
          README.md
        </a>{' '}
        를 클릭해주십시오.
      </Post>
    </Section>
  );
};

export default Home;
