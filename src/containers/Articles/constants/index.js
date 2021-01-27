import * as Yup from "yup";

export default {
  ARTICLE: {
    INIT: {
      image_url: "",
      title: "",
      description: "",
    },
    SCHEME: Yup.object().shape({
      image_url: Yup.string().required("This field is required"),
      title: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required"),
    }),
  },
};
