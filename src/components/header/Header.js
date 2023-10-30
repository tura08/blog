import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Welcome to my website</span> */}
        <h1 className="headerTitleLg">Gentle Way Practice</h1>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1645444124296-76e9e88f609e?auto=format&fit=crop&q=80&w=2846&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default Header;
