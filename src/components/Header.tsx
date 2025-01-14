import Navbar from "./Navbar";
import "../styles/main.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Reactarias</h1>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
