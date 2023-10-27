import "./Navigation.css";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const Navigation = ({ isAuth, signUserOut }) => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-links-container">
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
    </>
  );
};

export default Navigation;
