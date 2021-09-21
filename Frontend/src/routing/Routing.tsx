import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Routes } from '../Utilities/routes'
import { LandingPage } from '../Components/landingPage/LandingPage'
import CartScreen from '../Components/CartScreen/CartScreen'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
import { MainPage } from '../Components/MainPage/MainPage'

export const Routing = () => {
  return (
    <Switch>
      <Route path={Routes.index} exact>
        <LandingPage />
      </Route>

      <Route path={'/CartScreen'}>
        <CartScreen />
      </Route>

      <Route path={Routes.itemDetails}>
        <ItemDetails />
      </Route>

      <Route path={Routes.mainPage}>
        <MainPage />
      </Route>
    </Switch>
  )
}
