import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Home from "../components/Home";
import BlogPage from "../components/BlogPage";

const Layout = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={BlogList} />
          <Route exact path="/blogs/:id" component={BlogPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Layout;
