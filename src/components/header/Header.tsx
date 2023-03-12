import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// media & styles
import "./Header.scss";
import logo from "../../assets/logo.png";
import user from "../../assets/user-test.png";

import Navbar from "./Navbar";
import UserImg from "./UserImg";
import Button from "../button/Button";

const Header: React.FC<{
  landing: boolean;
}> = ({ landing }) => {
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
    <header
      className={
        !landing && showHeader
          ? "Header active"
          : "Header" && landing
          ? "Header landing"
          : "Header"
      }
    >
      <div className="container">
        <div className="Header-wrapper flex-row">
          <div className="flex-row">
            <div className={landing ? "Header-logo landing" : "Header-logo"}>
              <img src={logo} alt="netflix logo" />
            </div>
            {!landing && <Navbar />}
          </div>
          {!landing && <UserImg img={user} />}
          {landing && (
            <div className="flex-row" style={{ gap: ".5rem" }}>
              <Link to="/signin">
                <Button value="sign in" className="btn-auth" />
              </Link>
              <Link to="/signup">
                <Button value="sign up" className="btn-auth" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
