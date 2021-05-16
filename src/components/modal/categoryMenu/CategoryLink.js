import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// components
import SubCategoryWrapper from 'components/modal/categoryMenu/SubCategoryWrapper';
// icons
import { DownIcon } from 'lib/svg';
// styles
import * as styles from 'lib/styles/styles';
import palette from 'lib/styles/palette';

const CategoryLink = ({ to, message, onClick, SubCategoryList = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(v => !v);

  return (
    <>
      <BtnContainer>
        <Btn to={to} onClick={onClick}>
          {message}
        </Btn>
        {SubCategoryList.length !== 0 && (
          <Icon isOpen={isOpen} onClick={onToggle}>
            <DownIcon />
          </Icon>
        )}
      </BtnContainer>

      {SubCategoryList.length !== 0 && (
        <SubCategoryWrapper isOpen={isOpen}>{SubCategoryList}</SubCategoryWrapper>
      )}
    </>
  );
};

const BtnContainer = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${palette.gray1};
`;

const Btn = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 32px;
  height: 40px;
  padding: 4px 60px 4px 12px;
  box-sizing: border-box;
  transition: 0.2s ${styles.transition} ease-in-out;
  color: ${palette.black};
`;

const Icon = styled.button`
  display: block;
  height: 40px;
  flex: 1;
  padding-right: 20px;
  text-align: right;

  & > svg {
    width: 14px;
    height: 14px;
    transition: 0.2s ${styles.transition};
    transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `rotate(0deg)`)};
    transform-origin: center;
  }
`;

export default CategoryLink;
