import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// Reducers
import app from 'modules/app';
import modal from 'modules/modal';
import product from 'modules/product';
import catalog from 'modules/catalog';

/* 
	Combine Reducers
*/
const reducers = combineReducers({
  app,
  modal,
  product,
  catalog,
});

/* 
	Create Store
*/
const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
