import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Angels from "../pages/Angels";

const Layout = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content w-[calc(100% - 269px)] ml-[276px] bg-white rounded-[16px] overflow-y-auto flex flex-col items-center py-6">
        <Header />
        <Angels />
      </div>
    </main>
  );
};

export default Layout;
