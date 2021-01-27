import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { actions } from "../../../../store/actions";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SearchField = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    dispatch(
      actions.UPDATE_ADVANCED_SEARCH.SUCCESS({ inputValue, selectValue })
    );
  }, [inputValue, selectValue]);

  const handleChangeField = (e) => {
    setInputValue(e.target.value.toLowerCase().trim());
    if (inputValue && inputValue.length > 2) {
      // dispatch(actions.UPDATE_ADVANCED_SEARCH.SUCCESS({inputValue,selectValue}))
    }
  };
  const handleChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectValue}
          onChange={handleChangeSelect}
          label="Sort By"
        >
          <MenuItem value="created_at">Realese Date</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="id">Histoy Added</MenuItem>
        </Select>
      </FormControl>
      {/*<IconButton className={classes.iconButton} aria-label="menu" onClick >
        <MenuIcon />
  </IconButton>*/}
      <InputBase
        className={classes.input}
        placeholder="Search Article"
        inputProps={{ "aria-label": "search article" }}
        onChange={handleChangeField}
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
