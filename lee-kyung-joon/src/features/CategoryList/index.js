import React, { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../slice/categorySlice";

export default function CategoryList({ match }) {
	const [id, setId] = useState("1");
	const [name, setName] = useState("가디건");

	const dispatch = useDispatch();
	const categoryList = useSelector((state) => state.categoryReducer);

	useEffect(() => {
		dispatch(getCategory());
	}, []);

	return (
		<Box>
			<Typography>카테고리리스트</Typography>
			{console.log(">>>>>>>>>>", categoryList.category)}
			<Link to={`${match.url}/${id}`}>{name}</Link>
		</Box>
	);
}
