import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Http from "../common/Http";

const initialState = {
	category: [{ children: [] }, { children: [] }],
	gender: [],
	selectCategory: { title: "전체", arr: [] },
	subTitle: "",
};

export const getCategory = createAsyncThunk("GET_CATEGORY", async () => {
	const response = await Http.get("/categories", {}, { "Access-Control-Allow-Origin": "*" });
	console.log("카테고리 응답", response);
	return response.data;
});

export const categoryReducer = createSlice({
	name: "category",
	initialState,
	reducers: {
		addGender: (state, action) => {
			state.gender = action.payload;
		},
		selectCategory: (state, action) => {
			state.selectCategory = action.payload;
		},
		subTitle: (state, action) => {
			state.subTitle = action.payload;
		},
	},
	extraReducers: {
		[getCategory.fulfilled]: (state, action) => {
			state.category = action.payload;
		},
	},
});

export const { addGender, selectCategory, subTitle } = categoryReducer.actions;
