import { random, authentication } from "../token/index.js";
import { getUserByEmail, createStudent, createTeacher } from "../db/users.js";
import jwt from "jsonwebtoken";

export const registerstudent = async (req, res) => {
  try {
    console.log("In Register Student");
    console.log(req.body);
    const { firstName,
    lastName,
    email,
    contact,
    country,
    city,
    guardianName,guardianContact,
  password,userType} = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill both fields!" });
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = random();
    // if(userType==='student'){
      const newUser = await createStudent({
        firstName,lastName,contact:req.body.contactNo,userType,email,guardianName:req.body.guardianName,guardianContact:req.body.guardianContactNo,country,city,authentication:{
          password:authentication(salt,password),
          salt,
        }
      });
    // }


    return res.status(200).json({ email,userType });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
