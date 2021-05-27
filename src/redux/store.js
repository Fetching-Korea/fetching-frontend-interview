import { applyMiddleware, createStore } from "redux";
import { CategoryReducer } from "./reducer";
import thunk from 'redux-thunk';

const store = createStore(CategoryReducer,applyMiddleware(thunk));

export default store;