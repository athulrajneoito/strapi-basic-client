import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";

export const AuthLayout = () => {
  return (
    <div>
      <p>auth</p>
      <Router>
        <div className="mt-5 pt-5">
          <Switch>
        
            <Route  path="/" component={Signup} />
            <Route  path="/signup" component={Signup} />
            <Route  path="/auth/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
