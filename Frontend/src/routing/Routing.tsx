import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Routes } from '../Utilities/routes'
import { LandingPage } from '../Components/landingPage/LandingPage'
import CartScreen from '../Components/CartScreen/CartScreen'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
import { MainPage } from '../Components/MainPage/MainPage'
import LoginPage from '../Components/LoginPage/LoginPage'
import RegisterPage from '../Components/registerPage/RegisterPage'
import OrderItemWrapper from '../Components/OrderListItem/OrderItemWrapper'
import UserPanel from '../Components/UserPanel/UserPanel'

export const Routing = () => {
  return (
    <Switch>
      <Route path={Routes.index} exact>
        <LandingPage />
      </Route>

      <Route path={Routes.cartScreen}>
        <CartScreen />
      </Route>

      <Route path={Routes.itemDetails}>
        <ItemDetails />
      </Route>

      <Route path={Routes.mainPage}>
        <MainPage />
      </Route>

      <Route path={Routes.loginPage}>
        <LoginPage />
      </Route>

      <Route path={Routes.signUp}>
        <RegisterPage />
      </Route>

      <Route path="/orderItem">
        <OrderItemWrapper />
      </Route>

      <Route path="/userPanel">
        <UserPanel />
      </Route>
    </Switch>
  )
}
