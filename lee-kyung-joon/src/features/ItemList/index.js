import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Route } from "react-router-dom";

import CategoryList from "../CategoryList";
import ItemDetail from "../ItemDetail";

export default function ItemList({ match }) {
	return (
		<>
			<Route exact path={match.path} component={CategoryList} />
			<Route path={`${match.path}/:id`} component={ItemDetail} />
		</>
	);
}
