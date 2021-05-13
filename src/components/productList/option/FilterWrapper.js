import styled from 'styled-components';
// styles
import palette from 'lib/styles/palette';

const FilterWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid ${palette.gray2};
  margin-bottom: 20px;
  overflow: hidden;
`;

export default FilterWrapper;
