import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(),
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
  },
}));
