import logo from "../../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Text editor for notes</h1>
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  );
};

export default Header;
