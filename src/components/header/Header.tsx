import { useEffect, useState } from "react";
// media & styles
import "./Header.scss";
import logo from "../../assets/logo.png";
import user from '../../assets/user-test.png'


const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const handleHeader = () => {
    if (window.scrollY > 100) setShowHeader(true);
    else setShowHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);
    return () => window.removeEventListener("scroll", handleHeader);
  }, []);

  return (
    <header className={showHeader ? "Header active" : "Header"}>
      <div className="container">
        <div className="Header-wrapper flex-row">
          <div className="flex-row">
            <div className="Header-logo">
              <img src={logo} alt="netflix logo" />
            </div>
            <nav className="Header-nav flex-row">
              <li>
                <a href="/">movies</a>
              </li>
              <li>
                <a href="/">movies</a>
              </li>
              <li>
                <a href="/">movies</a>
              </li>
            </nav>
          </div>
          <div className="Header-user">
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
