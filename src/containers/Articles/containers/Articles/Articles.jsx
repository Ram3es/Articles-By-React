import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { ArticleCard } from "../../components/ArticleCard";
import { getAllArticles } from "../../store/selectors";
import { actions } from "../../../../store/actions";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { Button } from '@material-ui/core'
import useStyles from './styles';

export default () => {
  const articles = useSelector(getAllArticles());
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();

  const addNewArticle = () => {
    dispatch(
      actions.ADD_ARTICLE.REQUEST({
        id: uuidv4(),
        title: `Article title ${uuidv4()}`,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "https://picsum.photos/id/237/200/300",
      })
    );
  };

  return (
    <div className="articles-wrapper">
      <Button variant="contained" color="primary" className={classes.button} onClick={addNewArticle}>
        {t("Add new Article")}
      </Button>
      <div className="articles">
        {articles.map((article) => (
          <ArticleCard {...article} key={article.id} />
        ))}
      </div>
    </div>
  );
};
