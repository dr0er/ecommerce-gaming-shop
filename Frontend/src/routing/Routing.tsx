import React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "../Utilities/routes";
import { LandingPage } from "../Components/landingPage/LandingPage";
import CartScreen from "../Components/CartScreen/CartScreen";

interface Props {}

export const Routing: React.FC<Props> = (Props) => {
	return (
		<Switch>
			<Route path={Routes.index} exact>
				<LandingPage />
			</Route>

			<Route path={"/CartScreen"}>
				<CartScreen />
			</Route>
		</Switch>
	);
};
