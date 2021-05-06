import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Http from "../common/Http";

const initialState = {
	category: [],
};

export const getCategory = createAsyncThunk("GET_CATEGORY", async () => {
	const response = await Http.get("/categories", {}, { "Access-Control-Allow-Origin": "*" });
	console.log("카테고리 응답", response);
	return response.data;
});

export const categoryReducer = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: {
		[getCategory.fulfilled]: (state, action) => {
			state.category = action.payload;
		},
	},
});
