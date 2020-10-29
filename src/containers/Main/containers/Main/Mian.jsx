import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import * as action from "../../../Articles/store/actions";

import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";

export default ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.A_FetchArticlesRequest());
  }, [dispatch]);

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
