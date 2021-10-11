import { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MarketContentPage from "./components/MarketContent/MarketContentPage";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";


function App() {
  const authCtx = useContext(AuthContext);

  return (
      <Layout>
        <Switch>
          {!authCtx.isLoggedIn && (
          <Route path="/" exact>
            <HomePage />
          </Route>
          )};
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/profile">
              <UserProfile />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/market">
              <MarketContentPage />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
