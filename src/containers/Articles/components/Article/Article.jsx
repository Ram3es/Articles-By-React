import React, { useEffect, useState } from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import { getArticle } from "../../store/selectors";
import { withRouter } from "react-router";
import { actions } from "../../../../store/actions";
import FORMS from "../../constants";
import { Formik, Form } from "formik";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Grid,
  Container,
  TextField,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

export default withRouter(
  ({
    match: {
      params: { id },
    },
  }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
      if (id !== "new") {
        dispatch(actions.FETCH_ARTICLE.REQUEST(Number(id)));
      }
    }, [dispatch]);

    const selectedArticle =
      id !== "new" ? useSelector(getArticle(Number(id))) : null;

    const handleChangeArticle = (data) => {
      console.log(data);
      dispatch(actions.EDIT_ARTICLE.REQUEST(data));

      dispatch(push(ROUTES_PATH.ARTICLES));
    };

    const removeSelectedArticle = () => {
      console.log(typeof id);
      dispatch(actions.REMOVE_ARTICLE.REQUEST(id));
      dispatch(push(ROUTES_PATH.ARTICLES));
    };

    const handleSubmit = (data) => {
      if (selectedArticle) {
        handleChangeArticle(data);
      } else {
        const payload = {
          ...data,
          image_url: "https://picsum.photos/id/237/200/300",
        };
        console.log(payload, "payload");
        delete payload.image; // to do

        dispatch(actions.ADD_ARTICLE.REQUEST(payload));
        dispatch(push(ROUTES_PATH.ARTICLES));
      }
    };

    const fileReaderToBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    return (
      <Formik
        enableReinitialize={true}
        initialValues={
          selectedArticle
            ? { ...selectedArticle } // image: selectedArticle.image_url
            : FORMS.ARTICLE.INIT
        }
        validationSchema={FORMS.ARTICLE.SCHEME}
        onSubmit={handleSubmit}
      >
        {(
          {
            errors,
            touched,
            handleChange,
            setFieldValue,
            setFieldTouched,
            values: { title, description, image_url },
          },
          ...props
        ) => {
          console.log("errors", errors);
          console.log("touched", touched);
          console.log(props, "values");

          return (
            <Form>
              <div className={classes.heroContent}>
                <Container>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button
                          className={classes.button}
                          onClick={() => dispatch(push(ROUTES_PATH.ARTICLES))}
                          variant="contained"
                        >
                          &larr; Back
                        </Button>
                        <Button
                          type="submit"
                          className={classes.button}
                          variant="contained"
                          color="primary"
                        >
                          {id !== "new" ? "Save changes" : "Create new Article"}
                        </Button>
                        {id !== "new" ? (
                          <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={removeSelectedArticle}
                          >
                            Remove
                          </Button>
                        ) : null}
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </div>
              <Container className={classes.cardGrid}>
                <div className={classes.formFieldWrapper}>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      {image_url ? (
                        <img className={classes.image} src={image_url} alt="" />
                      ) : null}
                      <FormControl fullWidth margin="dense">
                        <OutlinedInput
                          fullWidth
                          error={touched.image_url && Boolean(errors.image_url)}
                          onChange={async (e) => {
                            e.persist();
                            console.log(e.target.files, "e target");
                            const [image] = e.target.files;
                            console.log(image, "image");

                            if (image) {
                              const base64ImageUrl = await fileReaderToBase64(
                                image
                              );
                              setFieldValue("image_url", base64ImageUrl);
                              setFieldTouched(e.target.name, true, false);
                            }
                          }}
                          id="image"
                          inputProps={{ name: "image_url" }}
                          type="file"
                        />
                        <FormHelperText error={Boolean(errors.image_url)}>
                          {touched.image_url && errors.image_url}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={9}>
                      <TextField
                        error={touched.title && Boolean(errors.title)}
                        fullWidth
                        name="title"
                        id="title"
                        onChange={(e) => {
                          setFieldValue("title", e.target.value);
                          setFieldTouched("title", true, false);
                        }}
                        value={title}
                        margin="dense"
                        label="Title"
                        variant="outlined"
                        helperText={touched.name && errors.name}
                      />
                      <FormControl className={classes.editor}>
                        <CKEditor
                          name="description"
                          id="description"
                          editor={ClassicEditor}
                          data={description}
                          onChange={(e, editor) => {
                            const data = editor.getData();
                            setFieldValue("description", data);
                            setFieldTouched("description", true, false);
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </Form>
          );
        }}
      </Formik>
    );
  }
);
