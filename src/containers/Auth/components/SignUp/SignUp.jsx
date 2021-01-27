import React from "react";
import { useDispatch } from "react-redux"
import { Typography, FormControl, TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import FORMS from "../../constants";
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../../router/constants";
import useStyles from "./styles";
import { Auth } from "../../containers/Auth";
import { A_AuthSignUpRequest } from "../../store/actions"

const SignUp = () => {
  const classes = useStyles();
  const dispatch =  useDispatch()

  const handleSubmit = (email) => {
    email.first_name = "Chris Berdly"
    email.last_name = "Stethem"
    email.password = "rewfwef3"
    console.log(email)
    dispatch(A_AuthSignUpRequest(email))
  };

  return (
    <Auth>
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
        {({ touched, errors, values: { email }, handleChange }) => {
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
    </Auth>
  );
};

export default SignUp;
