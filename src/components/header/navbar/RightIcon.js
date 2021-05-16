import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const RightIcon = () => {
  return <Icon>{'>'}</Icon>;
};

const Icon = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${palette.gray6};
  margin: 0 8px;
`;

export default RightIcon;
