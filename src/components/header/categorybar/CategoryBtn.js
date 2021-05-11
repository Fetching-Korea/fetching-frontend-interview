import styled from 'styled-components';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';
import media, { mediaValue } from 'lib/styles/media';

const CategoryBtn = ({ message, isChecked, onClick }) => {
  return (
    <li>
      <Btn isChecked={isChecked} onClick={onClick}>
        {message}
      </Btn>
    </li>
  );
};

const Btn = styled.button`
  font-size: 14px;
  height: 40px;
  padding: 4px 24px;
  transition: 0.2s ${styles.transition};
  color: ${({ isChecked }) => (isChecked ? palette.orange4 : palette.black)};

  &:nth-child(1) {
    padding: 4px 24px 4px 0;
  }

  @media (min-width: ${mediaValue.small}px) {
    &:hover {
      transform: translateY(-2px);
    }
  }

  ${media.small} {
    color: ${({ isChecked }) => (isChecked ? palette.black : palette.gray4)};
  }
`;

export default CategoryBtn;
