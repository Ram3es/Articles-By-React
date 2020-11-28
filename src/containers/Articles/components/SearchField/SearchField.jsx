import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { getAllArticles } from "../../../Articles/store/selectors";
import { actions } from "../../../../store/actions";
import { SelectInput } from "../SelectInput"

const SearchField = ({ articles, setArticles }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  /*const handleSearch = () =>{
   const foundArticles = articles.filter(article => article.title.include("001"))
   dispatch(actions.FETCH_ARTICLES.SUCCES(foundArticles))
} */
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const data = articles.slice();
    const foundArticles = articles.slice().filter((article) => {
      return article.title.toLowerCase().includes(inputValue);
    });
    if (foundArticles) dispatch(actions.FETCH_ARTICLES.SUCCESS(foundArticles));
  };

  return (
    <Paper component="form" className={classes.root}>
      <SelectInput />
      {/*<IconButton className={classes.iconButton} aria-label="menu" onClick >
        <MenuIcon />
  </IconButton>*/}
      <InputBase
        className={classes.input}
        placeholder="Search Article"
        inputProps={{ "aria-label": "search article" }}
        onChange={handleChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
};

export default SearchField;
