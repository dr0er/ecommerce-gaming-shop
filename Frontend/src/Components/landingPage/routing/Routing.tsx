import React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "../../../Utilities/routes";
import { LandingPage } from "../LandingPage";

interface Props {}

export const Routing: React.FC<Props> = (Props) => {
  return (
    <Switch>
      <Route path={Routes.test}>
        <LandingPage />
      </Route>
    </Switch>
  );
};
