import { getAllStudents } from "../db/users.js";

export const getStudents = async (req, res) => {
  try {
    console.log("In Get Students");
    let resp =await getAllStudents();
    console.log(resp);
  

    return res.status(200).json({ resp });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
