import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { selectCategory, subTitle } from "../slice/categorySlice";
import { postFilter, sort, categoryId } from "../slice/filterSlice";

const filterList = [
	{ title: "최신순", no: 0 },
	{ title: "할인율", no: 1 },
	{ title: "낮은가격", no: 2 },
	{ title: "높은가격", no: 3 },
];

export default function CategoryList({ match }) {
	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.categoryReducer);
	const itemList = useSelector((state) => state.filterReducer);

	useEffect(() => {
		dispatch(postFilter());
	}, []);

	const selected = (title, arr) => {
		dispatch(selectCategory({ title: title, arr: arr }));
	};

	return (
		<Body>
			<TopBox>
				<Top>
					<TopButton
						onClick={() => {
							selected("전체", []);
						}}
					>
						<TopText basic={categoryList.selectCategory.title === "전체" ? "black" : "#adb5bd"}>
							전체
						</TopText>
					</TopButton>
					{categoryList?.gender.map((e, i) => {
						return (
							<TopButton
								key={i}
								onClick={() => {
									selected(e?.name, e?.children);
								}}
							>
								<TopText basic={categoryList.selectCategory.title === e?.name ? "black" : "#adb5bd"}>
									{e?.name}
								</TopText>
							</TopButton>
						);
					})}
				</Top>
			</TopBox>
			<Sub>
				<HorizonScroll>
					{categoryList.selectCategory.arr.map((e, i) => {
						return (
							<MyButton
								key={i}
								onClick={() => {
									dispatch(subTitle(e.name));
									dispatch(categoryId(e.id));
									dispatch(postFilter());
								}}
							>
								<SubText basic={categoryList.subTitle === e.name ? "black" : "#adb5bd"}>
									{e?.name}
								</SubText>
							</MyButton>
						);
					})}
				</HorizonScroll>
			</Sub>
			<List>
				{filterList.map((e, i) => {
					return (
						<FilterButton
							onClick={() => {
								dispatch(sort(e.no));
								dispatch(postFilter());
							}}
						>
							{e.title}
						</FilterButton>
					);
				})}
			</List>
			{console.log(">>>>>>>>>?!?!?!?!?", itemList)}
			<ItemList>
				{itemList &&
					itemList.filterList.map((e, i) => {
						return <Typography>{e.brand}</Typography>;
					})}
			</ItemList>
			{/*<Link to={`${match.url}/${id}`}>{name}</Link>*/}
		</Body>
	);
}

const Body = styled.div``;

const Top = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	min-width: 370px;
	padding: 0px 15px;
`;

const TopButton = styled(Button)`
	padding: 0px 0px;
	margin: 0px 0px;
	min-width: 40px;
	height: 40px;
`;

const TopText = styled(Typography)`
	font-size: 15px;
	color: ${(props) => props.basic};
	font-weight: bold;
	word-break: keep-all;
`;

const SubText = styled(Typography)`
	font-size: 15px;
	color: ${(props) => props.basic};
	font-weight: bold;
	word-break: keep-all;
`;

const TopBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 435px;
	width: 100%;
`;

const HorizonScroll = styled.div`
	display: flex;
	overflow: auto;
	white-space: nowrap;
	justify-content: space-between;
	min-width: 435px;
	align-items: center;
	width: 100%;
`;

const Sub = styled.div`
	display: flex;
	padding: 0px 0px 0px 10px;
	background-color: #fff;
	min-width: 370px;
	height: 50px;
`;

const MyButton = styled(Button)`
	padding: 10px 5px;
	margin: 0px 10px;
`;

const List = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	margin-top: 20px;
`;

const FilterButton = styled(Button)`
	padding: 20px 5px;
	margin: 0px 10px;
`;

const ItemList = styled.div`
	overflow: auto;
	max-height: calc(100vh - 107px);
	padding: 0px 0px 0px 10px;
	min-width: 370px;
	scroll-behavior: smooth;
`;
