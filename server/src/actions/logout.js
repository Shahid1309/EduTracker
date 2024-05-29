import { getUserBySessionToken } from "../db/users.js";

export const logout = async (req, res) => {
  try {
    console.log("In Logout");
    const user = await getUserBySessionToken(req.cookies["ET"]);
    user.authentication.sessionToken = null;
    await user.save();
    res.clearCookie("ET");
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(503).json();
  }
};
