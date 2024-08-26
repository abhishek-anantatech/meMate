import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./style.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="children-wrapper">
        <div className="children">{children}</div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
