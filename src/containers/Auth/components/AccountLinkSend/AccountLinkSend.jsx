import React from "react";
import { Typography, Button } from "@material-ui/core";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { ROUTES_PATH } from "../../../../router/constants";

const AccountLinkSend = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/registration.svg"
        alt="Account created successfully"
      />
      <Typography variant="button">Account created successfully</Typography>
      <Typography variant="body1" display="block" align="center">
        We sent an email to your mail with instructions for activating account
      </Typography>
      <Typography variant="subtitle2" display="block" align="center">
        Link will be active for 1 hour
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => dispatch(push(ROUTES_PATH.SIGN_IN))}
      >
        Go to Login page
      </Button>
    </>
  );
};

export default AccountLinkSend;
