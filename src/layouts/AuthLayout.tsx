import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { useHistory, withRouter } from "react-router";
import GoogleAuthCallback from "../components/GoogleAuthCallback";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import "./authLayout.scss";
import { auth, forgotPasswowrd } from "../assets/images";
import { ForgotPassword } from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import { useEffect, useState } from "react";

const AuthLayout = () => {
  const location = useLocation();
  const history = useHistory();
  const [page, setpage] = useState("");

  useEffect(() => {
    console.log(location);
    if(location.pathname.split("/")[2]){
      setpage(location.pathname.split("/")[2]);

    } else history.push('/auth/signup')
  }, [location]);

  return (
    <div className="row m-0 layout-container">
      {page == "signin" || page == "signup" ? (
        <span className="back-btn" onClick={() => history.push('/')}>
          Go to Home
        </span>
      ) : (
        <span className="back-btn" onClick={() => history.push("/auth/signin")}>
          Login
        </span>
      )}

      <div className="col-md-6 text-center">
        {page == "signin" || page == "signup" ? (
          <img src={auth} alt="auth image" width="500" />
        ) : (
          <img src={forgotPasswowrd} alt="auth image" width="500" />
        )}

        {page == "signin" ? (
          <h4>Login to your Account</h4>
        ) : page == "signup" ? (
          <h4>Create a new Account</h4>
        ) : (
          <h4>Reset Password</h4>
        )}
      </div>
      <div className="col-md-6">
        <div className=" w-75">
          <Switch>
            <Route exact path="/auth/signup" component={Signup} />
            <Route exact path="/auth/signin" component={SignIn} />
            <Route
              exact
              path="/auth/forgotpassword"
              component={ForgotPassword}
            />
            <Route path="/auth/resetpassword" component={ResetPassword} />
            <Route path="/auth/google/callback">
              <GoogleAuthCallback />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default withRouter(AuthLayout);
