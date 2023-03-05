import React from "react";

const UserImg: React.FC<{
  img: string;
}> = ({ img }) => {
  return (
    <div className="Header-user">
      <img src={img} alt="user" />
    </div>
  );
};

export default UserImg;
