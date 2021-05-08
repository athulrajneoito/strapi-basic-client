import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import GoogleAuthCallback from "../components/GoogleAuthCallback";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";

export const AuthLayout = () => {
  return (
    <div>
      <Router>
        <div className="mt-5 pt-5">
          <Switch>
            <Route path="/auth/signup" component={Signup} />
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/google/callback">
              <GoogleAuthCallback />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
