import styled from 'styled-components';
// lib
import { transition } from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const Post = ({ children }) => {
  return <Content>{children}</Content>;
};

const Content = styled.div`
  position: relative;
  width: 90%;
  font-weight: 400;
  margin-left: 5vw;
  color: #eee;
  word-break: keep-all;
  transition: 0.4s ${transition};

  & > a {
    color: ${palette.teal7};
    transition: 0.1s ${transition};
    font-weight: 600;
  }
  & > a:hover {
    color: ${palette.teal1};
  }
`;

export default Post;
