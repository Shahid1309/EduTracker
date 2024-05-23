import { getUserBySessionToken } from "../db/users.js";

export const returnData = async (req, res) => {
  console.log("innn");
  if (!req.cookies["psychescan"]) return res.status(200).json();
  const userData = await getUserBySessionToken(req.cookies["psychescan"]);
  const data = userData ? userData.toJSON() : null;
  return res.status(200).json(data);
};
