import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// containers
import * as modals from 'containers/modal/index';
// components
import Background from 'components/modal/Background';
// modules
import { popModal, deleteModal } from 'modules/modal';

const Modal = () => {
  const dispatch = useDispatch();
  const modalList = useSelector(state => state.modal.modalList);
  const isShow = modalList.length !== 0;

  const [isClose, setIsClose] = useState(false);

  const PreventModalOff = e => e.stopPropagation();

  const onMouseDown = name => {
    setIsClose(true);
    window.setTimeout(() => dispatch(deleteModal(name)), 200);
  };

  const ModalList = modalList.map(modal => {
    const Content = modals[modal.name];
    return (
      <Content
        key={modal['name']}
        PreventModalOff={PreventModalOff}
        ModalOff={() => {
          onMouseDown(modal['name']);
        }}
        args={modal['args']}
      />
    );
  });

  useEffect(() => {
    if (isShow) {
      setIsClose(false);
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').removeAttribute('style');
    }
  }, [isShow, setIsClose]);

  return (
    <>
      {isShow && (
        <Background
          isClose={isClose}
          onMouseDown={() => {
            dispatch(popModal());
          }}
        >
          {ModalList}
        </Background>
      )}
    </>
  );
};

export default Modal;
