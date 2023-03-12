import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import defaultUser from '../../assets/default-user.jpg'

const UserImg: React.FC<{
  img: string;
}> = ({ img }) => {

  const { handleSignout } = useAuth()
  const [show, setShow] = useState<boolean>(false);

  const showUserDetails = () => setShow(true);
  const hideUserDetails = () => {
    setTimeout(() => {
      setShow(false);
    }, 450);
  };

  return (
    <div
      className="Header-user"
      onMouseEnter={showUserDetails}
      onMouseLeave={hideUserDetails}
    >
      <img src={img || defaultUser} alt="user" />
      <ul
        className={
          show ? "user-details flex-col active" : "user-details flex-col"
        }
      >
        <li className="flex-row" onClick={handleSignout}>Sign out of Netflix</li>
      </ul>
    </div>
  );
};

export default UserImg;
