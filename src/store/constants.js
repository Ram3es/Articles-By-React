import { actionConstantsCreator } from "../utils";

const ARTICLES = [
  "FETCH_ARTICLES",
  "FETCH_ARTICLE",
  "EDIT_ARTICLE",
  "REMOVE_ARTICLE",
  "ADD_ARTICLE",
];

const USER = ["FETCH_USER"];

export const compose = [...ARTICLES, ...USER];
export const constants = actionConstantsCreator(compose);
