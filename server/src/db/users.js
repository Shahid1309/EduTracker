import mongoose from "mongoose";

const { Schema, model } = mongoose;

const authenticationSchema = new Schema({
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  sessionToken: { type: String, select: false },
});

const commonFields = {
  email: { type: String, required: true },
  userType: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  authentication: authenticationSchema,
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

export const getUserByEmail = (email) =>
  Student.findOne({ email }) || Teacher.findOne({ email });

export const getUserBySessionToken = (sessionToken) =>
  Student.findOne({ "authentication.sessionToken": sessionToken }) ||
  Teacher.findOne({ "authentication.sessionToken": sessionToken });

export const createTeacher = (values) =>
  new Teacher(values).save().then((user) => user.toObject());

export const createStudent = (values) =>
  new Student(values).save().then((user) => user.toObject());

export const getAllStudents = () =>
  Student.find().then((students) =>
    students.map((student) => student.toObject())
  );

export { Student, Teacher };