import { getUserBySessionToken } from "../db/users.js";

export const returnData = async (req, res) => {
  console.log("In Initial");
  if (!req.cookies["ET"]) return res.status(200).json();
  const userData = await getUserBySessionToken(req.cookies["ET"]);
  const data = userData ? userData.toJSON() : null;
  console.log(data);
  return res.status(200).json(data);
};
