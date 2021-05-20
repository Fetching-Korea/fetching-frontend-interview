import React from "react";
import { StylesProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Appbar from "./features/Appbar";
import Gender from "./features/Gender";
import ItemList from "./features/ItemList";
import BrandList from "./features/BrandList";

export default function App() {
	return (
		<StylesProvider injectFirst>
			<Router>
				<Appbar />
				<Switch>
					<Route exact path="/" component={Gender} />
					<Route exact path="/productList" component={ItemList} />
					<Route exact path="/brands" component={BrandList} />
				</Switch>
			</Router>
		</StylesProvider>
	);
}
