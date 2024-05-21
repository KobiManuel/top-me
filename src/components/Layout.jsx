import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Angels from "../pages/Angels";

const Layout = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content w-[calc(100% - 269px)] ml-[269px]  overflow-y-auto overflow-x-hidden flex flex-col items-center">
        <Header />
        <Angels />
      </div>
    </main>
  );
};

export default Layout;
