import React from "react";
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";

const SignUp = () => {
  const classes = useStyles();

  const handleSubmit = (data) => {
    // TODO
  };

  return (
    <>
      <img
        className={classes.icon}
        src="/assets/icons/registration.svg"
        alt="Sign Up"
      />
      <Typography variant="button">Registration</Typography>
      <Formik
        initialValues={FORMS.SIGN_UP.INIT}
        validationSchema={FORMS.SIGN_UP.SCHEME}
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
                Registration
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
    </>
  );
};

export default SignUp;
