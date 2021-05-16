import styled from 'styled-components';
// lib
import palette from 'lib/styles/palette';

const Price = ({ price }) => {
  return <Value>{price.toLocaleString()}원</Value>;
};

const Value = styled.p`
  margin-top: 6px;
  margin-right: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${palette.purple7};
`;

export default Price;
