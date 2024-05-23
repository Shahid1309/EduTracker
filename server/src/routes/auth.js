import { login } from "../actions/login.js";
import { register } from "../actions/register.js";
import { logout } from "../actions/logout.js";

export default (router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.post("/auth/logout", logout);
};
