import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Home from "../components/Home";
import BlogPage from "../components/BlogPage";
import {withRouter} from 'react-router';

const Layout = () => {
  return (
    <div className="mt-5 pt-5">
        <Header />
        <Switch>
          <Route  path="/blogs/:id" component={BlogPage} />
          <Route  path="/blogs" component={BlogList} />
          <Route  path="/" component={Home} />
        </Switch>
    </div>
  );
};

export default withRouter(Layout);
