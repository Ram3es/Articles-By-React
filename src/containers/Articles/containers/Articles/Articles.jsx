import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArticleCard } from "../../components/ArticleCard";
import { getAllArticles } from "../../store/selectors";
import { actions } from "../../../../store/actions";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { Container, Grid, Button } from "@material-ui/core";
import { push } from "connected-react-router";
import { SearchField } from "../../components/SearchField";
import { articleSort } from "../../../Articles/store/selectors";
import { byFieldABC } from "../../../../shared";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

export default () => {
  //const articles = useSelector(getAllArticles());
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const articles = useSelector(articleSort());

  return (
    <>
      <div className={classes.input}>
        <SearchField articles={articles} />
      </div>
      <div>
        <div className={classes.heroContent}>
          <Container>
            <div className={classes.heroButtons}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    onClick={() => dispatch(push("/articles/new"))} ///push("/articles/new")
                    variant="contained"
                    color="primary"
                  >
                    {t("Add new article")}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid item key={article.id} xs={12} sm={6} md={4}>
                <ArticleCard {...article} key={article.id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};
