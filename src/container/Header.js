import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/">MyShop</Link>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/">
            <a className="p-2 text-dark">Features</a>
          </Link>
          <Link to="/enterprise">
            <a className="p-2 text-dark">Enterprise</a>
          </Link>
          <Link to="/support">
            <a className="p-2 text-dark">Support</a>
          </Link>
          <Link to="/pricing">
            <a className="p-2 text-dark">Pricing</a>
          </Link>
        </nav>
        <Link to="/signup">
          <a className="btn btn-outline-primary">Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
