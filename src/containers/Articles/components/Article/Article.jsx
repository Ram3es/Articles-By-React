import React, { useEffect, useState } from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import { getArticle } from "../../store/selectors";
import { withRouter } from "react-router";
import * as action from "../../store/actions";

export default withRouter(
  ({
    match: {
      params: { id },
    },
  }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(action.A_FetchArticlesRequest());
    }, [dispatch]);

    const selectedArticle = useSelector(getArticle(Number(id)));

    const handleChangeArticle = () => {
      dispatch(
        action.A_EditArticleRquest({
          /**
           * TODO
           */
        })
      );

      dispatch(push(ROUTES_PATH.ARTICLES));
    };

    return selectedArticle ? (
      <div className="article">
        <img src={selectedArticle.image} alt={selectedArticle.title} />
        <h2>{selectedArticle.title}</h2>
        <div>{selectedArticle.description}</div>
        <button onClick={handleChangeArticle}>Save Changes</button>
      </div>
    ) : null;
  }
);
