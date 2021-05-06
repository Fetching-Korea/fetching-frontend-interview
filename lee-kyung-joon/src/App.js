import React from "react";
import { StylesProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Appbar from "./features/Appbar";
import ItemList from "./features/ItemList";
import BrandList from "./features/BrandList";

export default function App() {
	return (
		<StylesProvider injectFirst>
			<Router>
				<Appbar />
				<Switch>
					<Route exact path="/" component={ItemList} />
					<Route path="/search" component={BrandList} />
				</Switch>
			</Router>
		</StylesProvider>
	);
}
