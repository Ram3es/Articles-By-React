import React, { useEffect } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";

import { ArticleCard } from "../../components/ArticleCard";
import { getAllArticles } from "../../store/selectors";
import * as action from "../../store/actions";

export default () => {
  const dispatch = useDispatch();
  const articles = useSelector(getAllArticles());

  useEffect(() => {
    dispatch(action.A_FetchArticlesRequest());
  }, [dispatch]);

  return (
    <div className="articles">
      {articles.map((article) => (
        <ArticleCard {...article} key={article.id} />
      ))}
    </div>
  );
};
