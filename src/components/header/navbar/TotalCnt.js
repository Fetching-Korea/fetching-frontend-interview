import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const TotalCnt = ({ value }) => {
  return (
    <Wrapper>
      <Text>총</Text>
      <Value>{value}</Value>
      <Text>개</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 0.5rem;
`;

const Text = styled.span`
  font-size: 12px;
  color: ${palette.gray5};
  margin-right: 4px;
`;

const Value = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${palette.black};
`;

export default TotalCnt;
