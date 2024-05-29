import { getUserByEmail } from "../db/users.js";

export const getDetails = async (req, res) => {
  try {
    console.log("In Get Details Students");
    let resp =await getUserByEmail(req.params.email);
    console.log(resp);
  

    return res.status(200).json({ resp });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
