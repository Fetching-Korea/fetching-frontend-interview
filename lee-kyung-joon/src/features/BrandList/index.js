import React, { useEffect, useState } from "react";
import { Typography, Button, Box, CardMedia } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getBrand } from "../slice/brandSlice";

export default function BrandList() {
	const dispatch = useDispatch();
	const brandList = useSelector((state) => state.brandReducer);
	const alphabet = [
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
	];

	const [select, setSelect] = useState("A");

	useEffect(() => {
		dispatch(getBrand());
	}, []);

	return (
		<Body>
			<Root>
				<HorizonScroll>
					{alphabet?.map((e, i) => {
						return (
							<MyButton
								href={`#${e}`}
								key={i}
								disableElevation={true}
								disableFocusRipple={true}
								disableRipple={true}
							>
								<Alphabet basic={select === e ? "black" : "#adb5bd"}>{e}</Alphabet>
							</MyButton>
						);
					})}
				</HorizonScroll>
			</Root>
			<List>
				{alphabet?.map((c, k) => {
					return (
						<>
							<Upper key={k} id={`${c}`}>
								{c}
							</Upper>
							{brandList?.brand
								?.filter((ele) => ele?.name.substr(0, 1) === c)
								?.map((a, j) => {
									return (
										<Row key={`${j}_${Math.random()}`}>
											<ImageBox>
												<Image image={a?.image} />
											</ImageBox>
											<NameBox>
												<Title>{a?.name}</Title>
												<KrTitle>{a?.krName}</KrTitle>
											</NameBox>
										</Row>
									);
								})}
						</>
					);
				})}
			</List>
		</Body>
	);
}

const Body = styled.div``;

const List = styled.div`
	overflow: auto;
	max-height: calc(100vh - 107px);
	padding: 0px 0px 0px 10px;
	min-width: 370px;
`;

const Root = styled.div`
	display: flex;
	padding: 0px 0px 0px 10px;
	background-color: #fff;
	min-width: 370px;
	height: 50px;
`;

const HorizonScroll = styled.div`
	display: flex;
	overflow: auto;
	white-space: nowrap;
	justify-content: space-between;
	min-width: 370px;
	align-items: center;
	width: 100%;
`;

const MyButton = styled(Button)`
	padding: 0px 0px;
	margin: 0px 0px;
	min-width: 40px;
	height: 40px;
`;

const Alphabet = styled(Typography)`
	font-size: 20px;
	color: ${(props) => props.basic};
	font-weight: bold;
	word-break: keep-all;
`;

const Upper = styled(Typography)`
	font-size: 30px;
	color: black;
	font-weight: bold;
	word-break: keep-all;
	margin-top: 50px;
	margin-left: 10px;
`;

const Title = styled(Typography)`
	font-size: 15px;
	color: black;
	font-weight: bold;
	word-break: keep-all;
`;
const KrTitle = styled(Typography)`
	font-size: 15px;
	color: #adb5bd;
	font-weight: bold;
	word-break: keep-all;
`;
const ImageBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 110px;
`;
const Image = styled(CardMedia)`
	border-radius: 500px;
	width: 80px;
	height: 80px;
	border-width: 1px;
	border-color: #dddddd;
	border-style: solid;
`;
const Row = styled(Box)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const NameBox = styled(Box)`
	margin-left: 10px;
`;
