import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import styled from 'styled-components';

const SwipeableWrapper = ({ open, onChange, onMouseDown, children }) => {
  return (
    <div onMouseDown={onMouseDown}>
      <SwipeableBottomSheet
        overflowHeight={0}
        open={open}
        onChange={onChange}
        bodyStyle={{ borderRadius: '16px 16px 0 0' }}
        overlayStyle={{ backgroundColor: 'transparent' }}
      >
        <Wrapper>{children}</Wrapper>
      </SwipeableBottomSheet>
    </div>
  );
};

const Wrapper = styled.div`
  height: 40vh;
  width: 94vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export default SwipeableWrapper;
