import styled from 'styled-components';
// styles
import media, { mediaQuery } from 'lib/styles/media';

const Thumbnail = ({ src, alt }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 230px;
  height: 380px;
  overflow: hidden;

  ${media.small} {
    width: 180px;
    height: 300px;
  }

  ${mediaQuery(400)} {
    width: 146px;
  }

  ${media.xsmall} {
    width: 130px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default Thumbnail;
