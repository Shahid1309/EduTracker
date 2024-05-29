// // // import { getUserByEmail } from '../db/users.js';
// // // import { authentication, random } from '../token/index.js';
// // // import jwt from 'jsonwebtoken';

// // // export const login = async (req, res) => {
// // //   try {
// // //     console.log('In Login')
// // //     const { email, password } = req.body;
// // //     console.log(req.body);

// // //     if (!email || !password) {
// // //       return res.status(400).json({message: 'Fill in both fields'});
// // //     }
// // //     console.log(email);
    
// // //     // const user = await getUserByEmail(email);
// // //     // console.log(user);
    
// // //     const user = await getUserByEmail(email).select(
// // //       "+authentication.salt +authentication.password"
// // //     );

// // //     // console.log(user);

// // //     if (!user) {
// // //       return res.status(400).json({message: 'User does not exist'});
// // //     }

// // //     const expectedHash = authentication(
// // //       user.authentication.salt.toString(),
// // //       password
// // //     );

// // //     if (user.authentication.password != expectedHash) {
// // //       return res.status(403).json({message : "Wrong credentials!"});
// // //     }

// // //     const salt = random();
// // //     user.authentication.sessionToken = jwt.sign(user._id.toString(), salt);

// // //     await user.save();

// // //     res.cookie("ET",user.authentication.sessionToken, {
// // //       domain: "localhost",
// // //       httpOnly:true,
// // //       path: "/",
// // //     });

// // //     return res.status(200).json(user);
// // //   } catch (error) {
// // //     console.log(error);
// // //     return res.sendStatus(400);
// // //   }
// // // };

// // import { getUserByEmail } from '../db/users.js';
// // import { authentication, random } from '../token/index.js';
// // import jwt from 'jsonwebtoken';

// // export const login = async (req, res) => {
// //   try {
// //     console.log('In Login');
// //     const { email, password } = req.body;
// //     console.log(req.body);

// //     if (!email || !password) {
// //       return res.status(400).json({ message: 'Fill in both fields' });
// //     }
// //     console.log(email);
    
// //     const userQuery = getUserByEmail(email);
// //     const user = await userQuery.exec(); // Execute the query to get the user

// //     if (!user) {
// //       return res.status(400).json({ message: 'User does not exist' });
// //     }

// //     const expectedHash = authentication(
// //       user.authentication.salt.toString(),
// //       password
// //     );

// //     if (user.authentication.password != expectedHash) {
// //       return res.status(403).json({ message: 'Wrong credentials!' });
// //     }

// //     const salt = random();
// //     user.authentication.sessionToken = jwt.sign(user._id.toString(), salt);

// //     await user.save();

// //     res.cookie("ET", user.authentication.sessionToken, {
// //       domain: "localhost",
// //       httpOnly: true,
// //       path: "/",
// //     });

// //     return res.status(200).json(user);
// //   } catch (error) {
// //     console.log(error);
// //     return res.sendStatus(400);
// //   }
// // };


// import { getUserByEmail } from '../db/users.js';
// import { authentication, random } from '../token/index.js';
// import jwt from 'jsonwebtoken';

// export const login = async (req, res) => {
//   try {
//     console.log('In Login');
//     const { email, password } = req.body;
//     console.log(req.body);

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Fill in both fields' });
//     }
//     console.log(email);
    
//     const userQuery = getUserByEmail(email);
//     const user = await userQuery.exec(); // Execute the query to get the user
//     console.log(user);

//     if (!user) {
//       return res.status(400).json({ message: 'User does not exist' });
//     }

//     const expectedHash = authentication(
//       user.authentication.salt.toString(),
//       password
//     );

//     if (user.authentication.password != expectedHash) {
//       return res.status(403).json({ message: 'Wrong credentials!' });
//     }

//     const salt = random();
//     user.authentication.sessionToken = jwt.sign(user._id.toString(), salt);

//     await user.save();

//     res.cookie("ET", user.authentication.sessionToken, {
//       domain: "localhost",
//       httpOnly: true,
//       path: "/",
//     });

//     return res.status(200).json(user);
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(400).json({ message: 'An error occurred during login', error: error.message });
//   }
// };


import { getUserByEmail } from '../db/users.js';
import { authentication, random } from '../token/index.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    console.log('In Login');
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({ message: 'Fill in both fields' });
    }
    console.log(email);
    
    const user = await getUserByEmail(email);
    console.log(user); // Add logging here to verify the user object

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const expectedHash = authentication(
      user.authentication.salt.toString(),
      password
    );

    if (user.authentication.password != expectedHash) {
      return res.status(403).json({ message: 'Wrong credentials!' });
    }

    const salt = random();
    user.authentication.sessionToken = jwt.sign(user._id.toString(), salt);

    await user.save();

    res.cookie("ET", user.authentication.sessionToken, {
      domain: "localhost",
      httpOnly: true,
      path: "/",
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(400).json({ message: 'An error occurred during login', error: error.message });
  }
};
