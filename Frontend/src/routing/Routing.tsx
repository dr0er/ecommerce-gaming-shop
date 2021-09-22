import { Switch, Route } from 'react-router-dom'
import { Routes } from '../Utilities/routes'
import { LandingPage } from '../Components/landingPage/LandingPage'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
import { MainPage } from '../Components/MainPage/MainPage'
import RegisterPage from '../Components/registerPage/RegisterPage'

export const Routing = () => {
  return (
    <Switch>
      <Route path={Routes.index} exact>
        <LandingPage />
      </Route>

      <Route path={Routes.itemDetails}>
        <ItemDetails />
      </Route>

      <Route path={Routes.mainPage}>
        <MainPage />
      </Route>
      <Route path={Routes.signup} exact>
        <RegisterPage />
      </Route>
    </Switch>
  )
}
