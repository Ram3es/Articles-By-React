import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch, connect } from "react-redux";
import { actions } from "../../../../store/actions"; ///A_FetchAllArticlesRequest
import { CssBaseline, Grid } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";

const Main = ({ children, actions: { A_FetchAllArticlesRequest } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLES.REQUEST());
    //A_FetchAllArticlesRequest();
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

const mapdispatchtoProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        //A_FetchAllArticlesRequest,
      },
      dispatch
    ),
  };
};

export default connect(null, mapdispatchtoProps)(Main);
