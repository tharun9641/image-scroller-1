import "../css/navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">Logo</div>
      <div className="nav-links">
        <a href="/home" alt="Home">
          Home
        </a>
        <a href="/edit" alt="edit">
          edit
        </a>
        <a href="/setting" alt="setting">
          setting
        </a>
        <a href="/#" alt="drop" className="drop-down">
          drop-down
          <div className="drop-items">
            <a href="/1" alt="1">
              item1
            </a>
            <a href="/2" alt="2">
              item2
            </a>
            <a href="/3" alt="3">
              item3
            </a>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
