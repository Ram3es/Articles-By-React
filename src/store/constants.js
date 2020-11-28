import { actionConstantsCreator } from "../utils";

const ARTICLES = [
  "FETCH_ARTICLES",
  "FETCH_ARTICLE",
  "EDIT_ARTICLE",
  "REMOVE_ARTICLE",
  "ADD_ARTICLE",
];

const USER = ["FETCH_USER"];

const COUNT = ["INKREMENT"];

export const compose = [...ARTICLES, ...USER, ...COUNT];
export const constants = actionConstantsCreator(compose);
