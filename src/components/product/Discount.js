import styled from 'styled-components';
// lib
import palette from 'lib/styles/palette';

const Discount = ({ price, ratio }) => {
  const ratioValue = Math.floor(Number(ratio));

  return (
    <Wrapper>
      {ratioValue !== 0 && (
        <>
          <Price>{price.toLocaleString()}원</Price>
          <Ratio>{ratioValue}%</Ratio>
        </>
      )}
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
