import "./App.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <div className="mt-5 pt-5">
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
