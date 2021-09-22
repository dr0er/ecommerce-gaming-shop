import { Switch, Route } from 'react-router-dom'
import { Routes } from '../Utilities/routes'
import { LandingPage } from '../Components/landingPage/LandingPage'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
<<<<<<< HEAD
import { MainPage } from '../Components/MainPage/MainPage'
=======
>>>>>>> e4fdf3c... minor fixes, added DaisyUI tailwind plugin
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

<<<<<<< HEAD
      <Route path={Routes.mainPage}>
        <MainPage />
      </Route>
=======
>>>>>>> e4fdf3c... minor fixes, added DaisyUI tailwind plugin
      <Route path={Routes.signup} exact>
        <RegisterPage />
      </Route>
    </Switch>
  )
}
