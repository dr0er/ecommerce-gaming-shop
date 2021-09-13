import React from "react";
import { Route, Redirect } from "react-router";

interface Props {}

/*jesli dostane do tego komponentu jakies dodatkowe propsy poza children, 
to beda one w formie tablicy w formie rest props*/

export const PrivateRoute: React.FC<Props> = ({ children, ...restProps }) => {
  const isAuth = false;
  // sprawdzamy czy dostalismy odpowiedz z serwera odnosnie autoryzacji
  if (isAuth === null) {
    return null;
  }
  return (
    // przekazujemy wszystkie propsy, ktore byly przekazane w routerze
    <Route
      {...restProps}
      /* jesli mamy ten route to if byl false i tutaj pojawia sie info o tym czy uzytkownik ma uprawnienia
      zeby wyswietlic strone*/
      render={({ location }) =>
        isAuth ? (
          /* jesli uzytkownik dostanie info zwrotne z b-e, ze jest uprawniony, 
            to dostaje to co chcial wyswietlic*/
          children
        ) : (
          // przekierowuje nas do logowania
          <Redirect
            to={{ pathname: "/login", state: { from: location.pathname } }}
          />
        )
      }
    />
  );
};
