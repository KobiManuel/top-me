import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <main>
      <Sidebar />
      <div className="w-[calc(100% - 269px)] ml-[269px] h-screen">
        <Header />
      </div>
    </main>
  );
};

export default Layout;
