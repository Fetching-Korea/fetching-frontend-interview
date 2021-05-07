import React from "react";
import { AppBar, Typography, Button, Box } from "@material-ui/core";
import { Menu, Search, FavoriteBorder, ShoppingBasketOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default function Appbar() {
	return (
		<MyAppBar position="sticky">
			<SpaceBetween>
				<Row style={{ marginRight: "50px" }}>
					<MyButton>
						<MenuIcon />
					</MyButton>
					<MyLink to="/search">
						<MyButton>
							<SearchIcon />
						</MyButton>
					</MyLink>
				</Row>
				<MyLink to="/">
					<MyButton>
						<Text>반응형웹</Text>
					</MyButton>
				</MyLink>
				<Row style={{ marginLeft: "50px" }}>
					<MyButton>
						<FavoriteBorderIcon />
					</MyButton>
					<MyButton>
						<ShoppingBasketOutlinedIcon />
					</MyButton>
				</Row>
			</SpaceBetween>
		</MyAppBar>
	);
}

const Text = styled(Typography)`
	font-size: 25px;
	color: black;
	word-break: keep-all;
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
	padding: 0px 10px;
	min-width: 0px;
`;

const MyAppBar = styled(AppBar)`
	background-color: #fff;
	box-shadow: 0px 0px 0px 0px;
	padding: 10px 5px;
	min-width: 390px;
`;

const MenuIcon = styled(Menu)`
	@media screen and (min-width: 500px) {
		width: 32px;
		height: 32px;
	}
`;

const SearchIcon = styled(Search)`
	@media screen and (min-width: 500px) {
		width: 32px;
		height: 32px;
	}
`;

const FavoriteBorderIcon = styled(FavoriteBorder)`
	@media screen and (min-width: 500px) {
		width: 32px;
		height: 32px;
	}
`;

const ShoppingBasketOutlinedIcon = styled(ShoppingBasketOutlined)`
	@media screen and (min-width: 500px) {
		width: 32px;
		height: 32px;
	}
`;

const MyLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
