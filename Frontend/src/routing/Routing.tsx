import React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "../Utilities/routes";
import { LandingPage } from "../Components/landingPage/LandingPage";
import ItemDetails from "../Components/ItemDetails/ItemDetails";
import RegisterPage from "../Components/RegisterPage/RegisterPage";

interface Props {}

export const Routing: React.FC<Props> = (Props) => {
	return (
		<Switch>
			<Route path={Routes.index} exact>
				<LandingPage />
			</Route>

			<Route path="/itemDetails">
				<ItemDetails />
			</Route>
			<Route path="/signup">
				<RegisterPage />
			</Route>
		</Switch>
	);
};
