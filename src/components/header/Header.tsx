// media & styles
import "./Header.scss";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

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
        <div className="Header-wrapper">
          <div className="Header-logo">
            <img src={logo} alt="netflix logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
