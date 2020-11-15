import React, { useEffect, useState } from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

const ResetPassword = ({
  match: {
    params: { token },
  },
}) => {
  const [isExpired, setTokenStatus] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token, false);

      if (decoded) {
        setTokenStatus(decoded.exp < new Date().getTime());
      } else {
        dispatch(push(ROUTES_PATH.SIGN_IN));
      }
    } else {
      dispatch(push(ROUTES_PATH.SIGN_IN));
    }
  }, [token]);

  const handleSubmit = (data) => {
    // TODO
  };

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/registration.svg"
        alt="Reset Password"
      />
      <Typography variant="button">Reset Password</Typography>
      {isExpired ? (
        <>
          <Typography
            variant="body1"
            display="block"
            gutterBottom
            align="center"
          >
            Link for change password is expired
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(push(ROUTES_PATH.FORGOT))}
            className={classes.submit}
          >
            Go To forgot password page
          </Button>
        </>
      ) : (
        <Formik
          initialValues={FORMS.RESET.INIT}
          validationSchema={FORMS.RESET.SCHEME}
          onSubmit={handleSubmit}
        >
          {({
            touched,
            errors,
            values: { confirmationPassword, password },
            handleChange,
          }) => {
            return (
              <Form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="password"
                    name="password"
                    label="password"
                    variant="outlined"
                    helperText={touched.password ? errors.password : ""}
                    error={touched.password && Boolean(errors.password)}
                    value={password}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="confirmationPassword"
                    name="confirmationPassword"
                    label="confirmationPassword"
                    variant="outlined"
                    helperText={
                      touched.confirmationPassword
                        ? errors.confirmationPassword
                        : ""
                    }
                    error={
                      touched.confirmationPassword &&
                      Boolean(errors.confirmationPassword)
                    }
                    value={confirmationPassword}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Reset
                </Button>
                <div className={classes.actions}>
                  <Link className={classes.link} to={ROUTES_PATH.SIGN_IN}>
                    <Typography variant="caption" color="primary">
                      Back to login page
                    </Typography>
                  </Link>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default ResetPassword;
