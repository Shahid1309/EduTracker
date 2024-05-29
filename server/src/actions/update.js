import { updateStudentByEmail } from "../db/users.js";

export const update = async (req, res) => {
  try {
    console.log("In Update");
    console.log(req.body.updateData);
    // const { email } = req.body.updateData.email;
    // console.log("Email: " + email);
    const updateData = req.body.updateData;
    console.log(updateData);

    const updatedStudent = await updateStudentByEmail(req.body.updateData.email, updateData);

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    console.error('Error updating student:', error);
    return res.status(500).json({ message: 'An error occurred while updating the student', error: error.message });
  }
};
