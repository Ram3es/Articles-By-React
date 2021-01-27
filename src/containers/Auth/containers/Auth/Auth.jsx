import React from "react";
import useStyles from "./styles";
import { CssBaseline, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SignIn } from "../../components/SignIn";
import { push } from "connected-react-router";

const Auth = ({ children }) => {
  const classes = useStyles();

  console.log(children);

  return (
    <>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>{children}</Paper>
      </main>
    </>
  );
};

export default Auth;
