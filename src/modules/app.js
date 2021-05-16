import produce from 'immer';

/*
	Thunk Actions
*/

/*
	Actions
*/
const SET_IS_READY = 'app/SET_IS_READY';

export const setIsReady = isReady => ({
  type: SET_IS_READY,
  payload: isReady,
});

/**
 * InitialState
 * @param {boolean} isReady 앱 구동 준비 여부
 */
const initialState = {
  isReady: false,
};

/*
	Reducer
*/
function app(state = initialState, action) {
  switch (action.type) {
    /* Set isReady */
    case SET_IS_READY:
      return produce(state, draft => {
        draft.isReady = action.payload;
      });

    default:
      return state;
  }
}

export default app;
