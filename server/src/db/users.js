// import mongoose from "mongoose";

// const { Schema, model } = mongoose;

// const authenticationSchema = new Schema({
//   password: { type: String, required: true, select: false },
//   salt: { type: String, select: false },
//   sessionToken: { type: String, select: true },
// });

// const commonFields = {
//   email: { type: String, required: true },
//   userType: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   contact: { type: String, required: true },
//   country: { type: String, required: true },
//   city: { type: String, required: true },
//   authentication: {
//     password: { type: String, required: true, select: false },
//   salt: { type: String, select: false },
//   sessionToken: { type: String, select: false },
//   },
// };

// const teacherSchema = new Schema({
//   ...commonFields,
// });

// const studentSchema = new Schema({
//   email: { type: String, required: true },
//   userType: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   contact: { type: String, required: true },
//   country: { type: String, required: true },
//   city: { type: String, required: true },
//   authentication: {
//     password: { type: String, required: true, select: false },
//   salt: { type: String, select: false },
//   sessionToken: { type: String, select: false },
//   },
//   guardianName: { type: String, required: true },
//   guardianContact: { type: String, required: true },
//   attendance: {
//     week1: {
//       maths: { type: String, required: true },
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//     },
//     week2: {
//       maths: { type: String, required: true },
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//     },
//     week3: {
//       maths: { type: String, required: true },
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//     },
//     week4: {
//       maths: { type: String, required: true },
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//     },
//   },
//   engagement: {
//     gd: { type: String, required: true },
//     ti: { type: String, required: true },
//     si: { type: String, required: true },
//   },
//   marks: {
//     q1: {
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//       maths: { type: String, required: true },
//     },
//     q2: {
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//       maths: { type: String, required: true },
//     },
//     mid: {
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//       maths: { type: String, required: true },
//     },
//     q3: {
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//       maths: { type: String, required: true },
//     },
//     q4: {
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//       maths: { type: String, required: true },
//     },
//     final: {
//       physics: { type: String, required: true },
//       chemistry: { type: String, required: true },
//       maths: { type: String, required: true },
//     },
//   },
// });

// const Student = model("Student", studentSchema);
// const Teacher = model("Teacher", teacherSchema);


// export const getUserByEmail = async (email) => {
//   let user = await Student.findOne({ email }).select("+authentication.salt +authentication.password");
//   if (!user) {
//     user = await Teacher.findOne({ email }).select("+authentication.salt +authentication.password");
//   }
//   return user;
// };






// export const getUserBySessionToken = async (sessionToken) => {
//   let user = await Student.findOne({ "authentication.sessionToken": sessionToken });
//   if (!user) {
//     user = await Teacher.findOne({ "authentication.sessionToken": sessionToken });
//   }
//   return user;
// };

// export const createTeacher = (values) =>
//   new Teacher(values).save().then((user) => user.toObject());

// export const createStudent = async (values) => {
//   const defaultStudentValues = {
//     ...values,
//     attendance: {
//       week1: { maths: "0", physics: "0", chemistry: "0" },
//       week2: { maths: "0", physics: "0", chemistry: "0" },
//       week3: { maths: "0", physics: "0", chemistry: "0" },
//       week4: { maths: "0", physics: "0", chemistry: "0" },
//     },
//     engagement: { gd: "0", ti: "0", si: "0" },
//     marks: {
//       q1: { physics: "0", chemistry: "0", maths: "0" },
//       q2: { physics: "0", chemistry: "0", maths: "0" },
//       mid: { physics: "0", chemistry: "0", maths: "0" },
//       q3: { physics: "0", chemistry: "0", maths: "0" },
//       q4: { physics: "0", chemistry: "0", maths: "0" },
//       final: { physics: "0", chemistry: "0", maths: "0" },
//     },
//   };
//   return new Student(defaultStudentValues).save().then((user) => user.toObject());
// };

// export const getAllStudents = () =>
//   Student.find().then((students) =>
//     students.map((student) => student.toObject())
//   );


//   export const deleteStudentByEmail = async (email) => {
//     try {
//       const result = await Student.findOneAndDelete({ email });
//       return result;
//     } catch (error) {
//       throw new Error('Error deleting student');
//     }
//   };

// export { Student, Teacher };


import mongoose from "mongoose";

const { Schema, model } = mongoose;

const authenticationSchema = new Schema({
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: true },
});

const commonFields = {
  email: { type: String, required: true },
  userType: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
};

const teacherSchema = new Schema({
  ...commonFields,
});

const studentSchema = new Schema({
  ...commonFields,
  guardianName: { type: String, required: true },
  guardianContact: { type: String, required: true },
  attendance: {
    week1: {
      maths: { type: String, required: true },
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
    },
    week2: {
      maths: { type: String, required: true },
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
    },
    week3: {
      maths: { type: String, required: true },
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
    },
    week4: {
      maths: { type: String, required: true },
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
    },
  },
  engagement: {
    gd: { type: String, required: true },
    ti: { type: String, required: true },
    si: { type: String, required: true },
  },
  marks: {
    q1: {
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
      maths: { type: String, required: true },
    },
    q2: {
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
      maths: { type: String, required: true },
    },
    mid: {
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
      maths: { type: String, required: true },
    },
    q3: {
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
      maths: { type: String, required: true },
    },
    q4: {
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
      maths: { type: String, required: true },
    },
    final: {
      physics: { type: String, required: true },
      chemistry: { type: String, required: true },
      maths: { type: String, required: true },
    },
  },
});

const Student = model("Student", studentSchema);
const Teacher = model("Teacher", teacherSchema);

export const getUserByEmail = async (email) => {
  let user = await Student.findOne({ email }).select("+authentication.salt +authentication.password");
  if (!user) {
    user = await Teacher.findOne({ email }).select("+authentication.salt +authentication.password");
  }
  return user;
};

export const getUserBySessionToken = async (sessionToken) => {
  let user = await Student.findOne({ "authentication.sessionToken": sessionToken });
  if (!user) {
    user = await Teacher.findOne({ "authentication.sessionToken": sessionToken });
  }
  return user;
};

export const createTeacher = (values) =>
  new Teacher(values).save().then((user) => user.toObject());

export const createStudent = async (values) => {
  const defaultStudentValues = {
    ...values,
    attendance: {
      week1: { maths: "0", physics: "0", chemistry: "0" },
      week2: { maths: "0", physics: "0", chemistry: "0" },
      week3: { maths: "0", physics: "0", chemistry: "0" },
      week4: { maths: "0", physics: "0", chemistry: "0" },
    },
    engagement: { gd: "0", ti: "0", si: "0" },
    marks: {
      q1: { physics: "0", chemistry: "0", maths: "0" },
      q2: { physics: "0", chemistry: "0", maths: "0" },
      mid: { physics: "0", chemistry: "0", maths: "0" },
      q3: { physics: "0", chemistry: "0", maths: "0" },
      q4: { physics: "0", chemistry: "0", maths: "0" },
      final: { physics: "0", chemistry: "0", maths: "0" },
    },
  };
  return new Student(defaultStudentValues).save().then((user) => user.toObject());
};

export const getAllStudents = () =>
  Student.find().then((students) =>
    students.map((student) => student.toObject())
  );

export const deleteStudentByEmail = async (email) => {
  try {
    const result = await Student.findOneAndDelete({ email });
    return result;
  } catch (error) {
    throw new Error('Error deleting student');
  }
};

export const updateStudentByEmail = async (email, updateData) => {
  try {
    const updateObject = {};

    // if (updateData.profile) {
    //   const { firstName, lastName, contact, country, city, guardianName, guardianContact } = updateData.profile;
    //   updateObject.firstName = firstName;
    //   updateObject.lastName = lastName;
    //   updateObject.contact = contact;
    //   updateObject.country = country;
    //   updateObject.city = city;
    //   updateObject.guardianName = guardianName;
    //   updateObject.guardianContact = guardianContact;
    // }

    if (updateData.marks) {
      updateObject.marks = updateData.marks;
    }

    if (updateData.engagement) {
      updateObject.engagement = updateData.engagement;
    }

    if (updateData.attendance) {
      updateObject.attendance = updateData.attendance;
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { email },
      { $set: updateObject },
      { new: true, runValidators: true }
    );

    return updatedStudent;
  } catch (error) {
    throw new Error('Error updating student');
  }
};

export { Student, Teacher };
