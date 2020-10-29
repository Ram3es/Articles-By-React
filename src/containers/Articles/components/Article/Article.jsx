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
    const [article, setArticle] = useState(null);

    useEffect(() => {
      dispatch(action.A_FetchArticleRequest(Number(id)));
    }, [dispatch]);

    const selectedArticle = useSelector(getArticle(Number(id)));

    useEffect(() => {
      setArticle(selectedArticle);
    }, [selectedArticle]);

    const handleChangeArticle = () => {
      dispatch(action.A_EditArticleRquest(article));

      dispatch(push(ROUTES_PATH.ARTICLES));
    };

    const removeSelectedArticle = () => {
      dispatch(action.A_RemoveArticleRequest(article.id));
      dispatch(push(ROUTES_PATH.ARTICLES));
    };

    return article ? (
      <div className="article-item">
        <img src={article.image} alt={article.title} />
        <h2>{article.title}</h2>
        <div>{article.description}</div>
        <button onClick={handleChangeArticle}>Save Changes</button>
        <button onClick={removeSelectedArticle}>Remove article</button>
      </div>
    ) : null;
  }
);
