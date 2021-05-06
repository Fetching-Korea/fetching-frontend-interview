import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { categoryReducer } from "../features/slice/categorySlice";
import { brandReducer } from "../features/slice/brandSlice";

const reducer = combineReducers({ categoryReducer: categoryReducer.reducer, brandReducer: brandReducer.reducer });

export const store = configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});
