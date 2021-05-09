
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import GoogleAuthCallback from "../components/GoogleAuthCallback";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import "./authLayout.scss";
import { auth } from "../assets/images";
import { ForgotPassword } from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

export const AuthLayout = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  console.log(page);
  
  return (
    <div className="row m-0 layout-container">
      <div className="col-md-6 text-center">
        <img src={auth} alt="auth image" width="500" />

        {page == "signin" ? (
          <h4>Login to your Account</h4>
        ) : (
          <h4>Create a new Account</h4>
        )}
      </div>
      <div className="col-md-6">
        <Router>
          <div className=" w-75">
            <Switch>
              <Route exact path="/auth/signup" component={Signup} />
              <Route exact path="/auth/signin" component={SignIn} />
              <Route exact path="/auth/forgotpassword" component={ForgotPassword} />
              <Route path="/auth/resetpassword" component={ResetPassword} />
              <Route path="/auth/google/callback">
                <GoogleAuthCallback />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};
