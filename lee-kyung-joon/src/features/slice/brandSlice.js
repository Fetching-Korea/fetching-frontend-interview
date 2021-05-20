import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Http from "../common/Http";

const initialState = {
	brand: [],
};

export const getBrand = createAsyncThunk("GET_BRAND", async () => {
	const response = await Http.get("/brands", {}, { "Access-Control-Allow-Origin": "*" });
	console.log("브랜드 응답", response);
	return response.data;
});

export const brandReducer = createSlice({
	name: "brand",
	initialState,
	reducers: {},
	extraReducers: {
		[getBrand.fulfilled]: (state, action) => {
			state.brand = action.payload;
		},
	},
});
