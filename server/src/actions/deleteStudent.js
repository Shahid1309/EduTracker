import { deleteStudentByEmail } from "../db/users.js";

export const deleteStudent = async (req, res) => {
  try {
    console.log('In Delete Student');
    const { email } = req.params;
    const result = await deleteStudentByEmail(email);

    if (!result) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({ message: 'Student deleted successfully', student: result });
  } catch (error) {
    console.error('Error deleting student:', error);
    return res.status(500).json({ message: 'An error occurred while deleting the student', error: error.message });
  }
};
