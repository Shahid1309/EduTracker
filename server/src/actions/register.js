import { random, authentication } from "../token/index.js";
import { getUserByEmail, createUser } from "../db/users.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    console.log("trg");
    const { email, password, userType } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill both fields!" });
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const salt = random();
    const newUser = await createUser({
      email,
      password,
      userType
    });

    // const user = await getUserByEmail(email);
    // user.authentication.sessionToken = jwt.sign(user._id.toString(), salt);

    // await user.save();

    // res.cookie("psychescan", user.authentication.sessionToken, {
    //   domain: "localhost",
    //   path: "/",
    // });

    return res.status(200).json({ email,userType });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
