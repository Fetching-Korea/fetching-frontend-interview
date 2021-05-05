import React from "react";
import { AppBar, Typography, Button, Box } from "@material-ui/core";
import { Menu, Search, FavoriteBorder, ShoppingBasketOutlined } from "@material-ui/icons";
import styled from "styled-components";

export default function Appbar() {
	return (
		<MyAppBar position="static">
			<SpaceBetween>
				<Row>
					<MyButton>
						<Menu />
					</MyButton>
					<MyButton>
						<Search />
					</MyButton>
				</Row>
				<Text>FETCHING</Text>
				<Row>
					<MyButton>
						<FavoriteBorder />
					</MyButton>
					<MyButton>
						<ShoppingBasketOutlined />
					</MyButton>
				</Row>
			</SpaceBetween>
		</MyAppBar>
	);
}

const Text = styled(Typography)`
	font-size: 23px;
	color: black;
`;

const SpaceBetween = styled(Box)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Row = styled(Box)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const MyButton = styled(Button)`
	padding: 5px 10px;
	min-width: 0px;
`;

const MyAppBar = styled(AppBar)`
	background-color: #fff;
	box-shadow: 0px 0px 0px 0px;
	padding: 10px 5px;
`;
