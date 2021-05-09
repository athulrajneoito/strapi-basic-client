import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getItem, removeItem } from "../helpers/localStorage";

const Header = () => {
  const history = useHistory();
  const [user, setuser] = useState();

  useEffect(() => {
    async function fetchUser() {
      const isUser = JSON.parse(getItem("user"));
      if (isUser) setuser(isUser);
    }
    fetchUser();
  }, []);

  const logout = () => {
    removeItem("user");
    history.push("/auth/signin");
  };
  return (
    <nav className=" navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand">
          {" "}
          <Link to="/">My Blogs</Link>
        </span>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link">
            {user &&  <Link to="/blogs">Blogs</Link>}
             
            </span>
          </div>
        </div>
        <div>
          {!user && <Link to="/auth/signin">Login</Link>}
          {user && <span onClick={() => logout()}>Logout</span>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
