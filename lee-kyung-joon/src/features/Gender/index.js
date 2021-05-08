import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getCategory, addGender } from "../slice/categorySlice";
import { Link } from "react-router-dom";

export default function Gender() {
	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.categoryReducer);

	useEffect(() => {
		dispatch(getCategory());
	}, []);

	return (
		<Body>
			{categoryList?.category?.map((e, i) => {
				return (
					<MyButton
						key={i}
						onClick={() => {
							dispatch(addGender(e.children));
						}}
						to="/productList"
					>
						<Text>{e.name}</Text>
					</MyButton>
				);
			})}
		</Body>
	);
}

const Body = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
	min-width: 450px;
`;

const MyButton = styled(Link)`
	color: inherit;
	text-decoration: none;
	padding: 200px 20px;
	min-width: 0px;
`;

const Text = styled(Typography)`
	font-size: 25px;
	color: black;
	word-break: keep-all;
`;
