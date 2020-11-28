import React, { useState } from "react";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import { actions } from "../../../../store/actions";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { increment } from "../../store/selectors";

export default ({ image_url, title, description, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  //const increments = useSelector(increment())

  const removeSelectedArticle = () => {
    dispatch(actions.REMOVE_ARTICLE.REQUEST(id));
  };

  const handleViewArticles = () => {
    // dispatch(actions.INKREMENT.REQUEST())
    setCount(count + 1);
   // dispatch(push(`/articles/view/${id}`));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image_url}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
        <Typography>{`watched ${count}`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleViewArticles}>
          View
        </Button>
        <Button
          onClick={() => dispatch(push(`${ROUTES_PATH.ARTICLES}/${id}`))}
          size="small"
          color="primary"
        >
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={removeSelectedArticle}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
