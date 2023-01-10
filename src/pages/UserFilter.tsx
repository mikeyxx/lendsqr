import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserInfoFilter from "../components/UserInfoFilter";

const UserFilter = () => {
  return (
    <div className="usersFilterContainer">
      <Header />
      <div className="usersFilter-wrapper">
        <Sidebar />
        <UserInfoFilter />
      </div>
    </div>
  );
};

export default UserFilter;
