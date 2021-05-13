import styled from 'styled-components';
// lib
import palette from 'lib/styles/palette';

const Discount = ({ price, ratio }) => {
  return (
    <Wrapper>
      <Price>{price}</Price>
      <Ratio>{Number(ratio)}%</Ratio>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 24px;
`;

const Price = styled.p`
  margin-top: 8px;
  margin-right: 4px;
  font-size: 12px;
  line-height: 15px;
  text-decoration: line-through;
  color: ${palette.gray5};
`;

const Ratio = styled.p`
  margin-top: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${palette.orange4};
`;

export default Discount;
