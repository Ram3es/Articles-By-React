import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { actions } from "../../../../store/actions";

import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";

export default ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLES.REQUEST());
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
