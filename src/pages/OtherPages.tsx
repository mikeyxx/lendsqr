import React from "react";
import Header from "../components/Header";
import NoCustomerDataComponent from "../components/NoCustomerDataComponent";
import Sidebar from "../components/Sidebar";

const OtherPages = () => {
  return (
    <div className="other-pages-container">
      <Header />
      <div className="other-pages-wrapper">
        <Sidebar />
        <NoCustomerDataComponent />
      </div>
    </div>
  );
};

export default OtherPages;
