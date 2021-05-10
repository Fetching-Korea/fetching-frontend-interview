import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const PUSH_MODAL = 'modal/PUSH_MODAL';
const POP_MODAL = 'modal/POP_MODAL';
const DELETE_MODAL = 'modal/DELETE_MODAL';
const CLEAR_MODAL = 'modal/CLEAR_MODAL';

export const pushModal = ({ name, args }) => ({
  type: PUSH_MODAL,
  payload: { name, args },
});
export const popModal = () => ({ type: POP_MODAL });
export const deleteModal = name => ({ type: DELETE_MODAL, payload: name });
export const clearModal = () => ({ type: CLEAR_MODAL });

/*
	InitialState
*/
const initialState = {
  modalList: [],
};

/*
	Reducer
*/
function modal(state = initialState, action) {
  switch (action.type) {
    case PUSH_MODAL:
      /* Modal push */
      return produce(state, draft => {
        const filtered = state.modalList.filter(
          modal => modal.name === action.payload.name,
        );
        if (filtered.length > 0) return;
        draft.modalList.push(action.payload);
      });

    case POP_MODAL:
      /* Modal pop */
      return produce(state, draft => {
        const index = state.modalList.length - 1;
        if (index >= 0) {
          draft.modalList.splice(index, 1);
        }
      });

    case DELETE_MODAL:
      /* Modal OFF */
      return produce(state, draft => {
        draft.modalList = state.modalList.filter(modal => modal.name !== action.payload);
      });

    case CLEAR_MODAL:
      /* ALl Modal OFF */
      return produce(state, draft => {
        draft.modalList = [];
      });

    default:
      return state;
  }
}

export default modal;
