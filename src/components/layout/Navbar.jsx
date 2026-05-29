import "layout_styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-white">Dine</span>
        <span className="logo-orange">Hub</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="login-btn">
        Login →
      </button>
    </nav>
  );
}

export default Navbar;