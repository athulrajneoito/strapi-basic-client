import "./App.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";

function App() {
  return (
    <div>
      <Router>
        <div className="">
          <Switch>
            <Route path="/auth" component={AuthLayout}/>
            <Route path="/" component = {Layout} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
