import { returnData } from "../actions/initial.js";

export default (router) => {
  router.get("/", returnData);
};
