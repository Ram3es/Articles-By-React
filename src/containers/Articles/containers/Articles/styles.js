import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    margin: "10px",
    height: "35px",
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px",
  },
}));
