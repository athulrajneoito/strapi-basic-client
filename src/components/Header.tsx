import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
 
      <nav className=" navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">
            {" "}
            <Link to="/">My Blogs</Link>
          </span>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span className="nav-link">
                {" "}
                <Link to="/blogs">Blogs</Link>
              </span>
            </div>
          </div>
        </div>
      </nav>

  );
};

export default Header;
