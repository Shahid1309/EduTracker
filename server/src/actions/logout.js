import { getUserBySessionToken } from "../db/users.js";

export const logout = async (req, res) => {
  try {
    const user = await getUserBySessionToken(req.cookies["psychescan"]);
    user.authentication.sessionToken = null;
    await user.save();
    res.clearCookie("psychescan");
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(503).json();
  }
};
