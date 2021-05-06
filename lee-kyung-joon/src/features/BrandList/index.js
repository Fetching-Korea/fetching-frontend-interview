import React, { useEffect, useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getBrand } from "../slice/brandSlice";

export default function BrandList() {
	const dispatch = useDispatch();
	const brandList = useSelector((state) => state.brandReducer);
	const [alphabet, setAlphabet] = useState([
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	]);

	const [select, setSelect] = useState("A");

	useEffect(() => {
		dispatch(getBrand());
	}, []);

	return (
		<Body>
			<Root>
				<HorizonScroll>
					{alphabet.map((e, i) => {
						return (
							<MyButton
								key={i}
								onClick={() => {
									setSelect(e);
								}}
							>
								<Text basicColor={select === e ? "black" : "#ced4da"}>{e}</Text>
							</MyButton>
						);
					})}
				</HorizonScroll>
			</Root>
			<List>
				{brandList.brand.map((a, j) => {
					return <Text key={j}>{a.name}</Text>;
				})}
			</List>
		</Body>
	);
}

const Body = styled.div`
	padding-top: 25px;
`;

const List = styled.div`
	margin-top: 20px;
`;

const Root = styled.div`
	margin: 0px 20px 0px 10px;
	min-width: 360px;
	padding-bottom: 20px;
	background-color: #fff;
`;

const HorizonScroll = styled.div`
	display: flex;
	overflow-x: scroll;
	white-space: nowrap;
	justify-content: space-between;
`;

const MyButton = styled(Button)`
	padding: 0px 0px;
	margin: 0px 0px;
	min-width: 40px;
`;

const Text = styled(Typography)`
	font-size: 20px;
	color: ${(props) => props.basicColor};
	word-break: keep-all;
	@media screen and (max-width: 500px) {
		font-size: 15px;
	}
`;
