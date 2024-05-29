import { login } from "../actions/login.js";
import { register } from "../actions/register.js";
import { logout } from "../actions/logout.js";
import { registerstudent } from "../actions/registerstudent.js";
import { getStudents } from "../actions/getStudents.js";
// import { deleteStudentByEmail } from "../db/users.js";
import { update } from "../actions/update.js";
import { deleteStudent } from "../actions/deleteStudent.js";
import { getDetails } from "../actions/getDetails.js";
export default (router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.post("/auth/logout", logout);
  router.post("/auth/registerstudent", registerstudent);
  router.get("/getstudents", getStudents);
  router.delete("/deletestudent/:email", deleteStudent);
  router.get("/getdetails/:email", getDetails);
  router.patch("/update",update);
};
