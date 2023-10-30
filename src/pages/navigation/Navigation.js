import "./Navigation.css";
import logo from "../../assets/logo_scuro.png";

import { Link } from "react-router-dom";

const Navigation = ({ isAuth, signUserOut }) => {
  return (
    <div className="navigation">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-right">
        <Link className="nav-link" to="/blog">
          BLOG
        </Link>
        <Link className="nav-link" to="/about">
          ABOUT
        </Link>
        {!isAuth ? (
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
        ) : (
          <>
            <Link className="nav-link" to="/createpost">
              CREATE POST
            </Link>
            <button onClick={signUserOut}>LOGOUT</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
