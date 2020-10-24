import React from "react";
import "./index.scss";

// import classnames from 'classnames';

import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";

export default ({ children }) => {
  return (
    <main className="main-container">
      <Header />
      <div className="content">
        <SideBar />
        {children}
      </div>
    </main>
  );
};
