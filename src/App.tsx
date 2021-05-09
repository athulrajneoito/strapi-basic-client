import "./App.css";
import Layout from "./layouts/Layout";
import {withRouter} from 'react-router';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  AuthLayout  from "./layouts/AuthLayout";
import Toast from "./components/Toast";

function App() {
  return (
    <div>
      <Toast />
      <BrowserRouter>
        <div className="">
          <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Route path="/" component={Layout} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
