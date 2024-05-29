// import express from "express";

// import authentication from "./auth.js";
// // import initial from "./initial.js";

// const router = express.Router();

// module.exports = () => {
//   authentication(router);
//   update(router);
//   // initial(router);
//   return router;
// };
import express from "express";
import authentication from "./auth.js";
// import estimate from "./estimate.js";
import initial from "./initial.js";

const router = express.Router();

const exportRouter = () => {
  authentication(router);
  // estimate(router);
  initial(router);
  return router;
};

export default exportRouter;
