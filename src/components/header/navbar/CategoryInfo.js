import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const CategoryInfo = ({ message }) => {
  return <Icon>{message}</Icon>;
};

const Icon = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${palette.gray5};
`;

export default CategoryInfo;
