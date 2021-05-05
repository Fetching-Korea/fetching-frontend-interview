import React from "react";
import { StylesProvider } from "@material-ui/core";

import Appbar from "./features/Appbar";

export default function App() {
	return (
		<StylesProvider injectFirst>
			<Appbar />
		</StylesProvider>
	);
}
