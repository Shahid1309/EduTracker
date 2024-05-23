import { estimate } from "../actions/estimate.js";

export default (router) => {
  router.get("/predict", estimate);
};
