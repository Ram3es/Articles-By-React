import React from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";
import { Auth } from "../../containers/Auth";

const ForgotPassword = () => {
  const classes = useStyles();

  const handleSubmit = (data) => {
    // TODO
  };

  return (
    <Auth>
      <img
        className={classes.icon}
        src="/assets/icons/login.svg"
        alt="Forgot Password"
      />
      <Typography variant="button">Forgot Password</Typography>
      <Formik
        initialValues={FORMS.RESET.INIT}
        validationSchema={FORMS.RESET.SCHEME}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values: { email, password }, handleChange }) => {
          return (
            <Form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                  value={email}
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
                Send email
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
    </Auth>
  );
};

export default ForgotPassword;
