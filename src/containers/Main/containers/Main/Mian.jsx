import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { actions } from "../../../../store/actions";
import { CssBaseline, Grid } from "@material-ui/core";

import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";

export default ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLES.REQUEST());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={1} className={classes.container}>
          <Grid item>{children}</Grid>
        </Grid>
      </main>
    </div>
  );
};
