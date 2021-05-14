import { useState } from 'react';
import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';
import media, { mediaQuery } from 'lib/styles/media';
import animations from 'lib/styles/animations';

const Thumbnail = ({ src, alt, isLoading = false }) => {
  const [isError, setIsError] = useState(false);

  const onError = () => setIsError(true);

  return (
    <Wrapper>
      {(isError || isLoading) && <FakeImage />}
      {!isError && !isLoading && <Image src={src} alt={alt} onError={onError} />}
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

  ${mediaQuery(500)} {
    height: 260px;
  }

  ${mediaQuery(400)} {
    width: 146px;
    height: 240px;
  }

  ${media.xsmall} {
    width: 130px;
    height: 200px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const FakeImage = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${palette.gray1};
  animation: 2s ${animations.blink} infinite;
`;

export default Thumbnail;
