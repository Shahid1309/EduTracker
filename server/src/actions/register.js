import { random, authentication } from "../token/index.js";
import { getUserByEmail, createStudent, createTeacher } from "../db/users.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    console.log("In Reg");
    console.log(req.body);
    const { firstName,
    lastName,
    email,
    contact,
    country,
    city,
  password,userType} = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill both fields!" });
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = random();
    if(userType==='student'){
      const newUser = await createStudent({
        firstName,lastName,contact:req.body.contactNo,userType,email,guardianName:req.body.guardianName,guardianContact:req.body.guardianContactNo,country,city,authentication:{
          password:authentication(salt,password),
          salt,
        }
      });
    }
    else{
    const newUser = await createTeacher({
      firstName,
    lastName,
    email,
    contact,
    country,
    city,userType,
    authentication:{
      password:authentication(salt,password),
      salt,
    }
    });}


    return res.status(200).json({ email,userType });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
