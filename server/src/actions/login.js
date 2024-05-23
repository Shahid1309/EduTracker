import { getUserByEmail } from "../db/users.js";
import { authentication, random } from "../token/index.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    console.log('In login')
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill in both fields" });
    }

    const user = await getUserByEmail(email);
    console.log(user);

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }



    if (password != user.password) {
      return res.status(403).json({ message: "Wrong credentials!" });
    }

    

    

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
