import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Http from "../common/Http";

const initialState = {
	filterList: [],
	bookmark: "",
	categoryId: "",
	minimumPrice: "",
	maximumPrice: "",
	sort: "",
};

export const postFilter = createAsyncThunk("POST_FILTER", async () => {
	try {
		const response = await Http.post(
			"/items/search",
			{
				bookmark: initialState.bookmark,
				categoryId: initialState.categoryId,
				minimumPrice: initialState.minimumPrice,
				maximumPrice: initialState.maximumPrice,
				sort: initialState.sort,
				needCount: true,
			},
			{ "Access-Control-Allow-Origin": "*" }
		);
		console.log("필터 응답", response);
		return response.data;
	} catch (error) {
		return [];
	}
});

export const filterReducer = createSlice({
	name: "filterList",
	initialState,
	reducers: {
		sort: (state, action) => {
			state.sort = action.payload;
		},
		categoryId: (state, action) => {
			state.categoryId = action.payload;
		},
	},
	extraReducers: {
		[postFilter.fulfilled]: (state, action) => {
			state.filterList = action.payload;
		},
	},
});

export const { sort, categoryId } = filterReducer.actions;
