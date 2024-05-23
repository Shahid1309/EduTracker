import { spawn } from "child_process";
export const estimate = async (req, res) => {
  try {
    console.log("In");
    const estimate = [
      "Anxiety Disorder",
      "Mood Disorder",
      "Neurodivergent Disorder",
      "Personality Disorder",
      "Undetermined",
    ];
    const pythonProcess = spawn("python", [
      "C:/Users/Dilshad/Desktop/Major-Project/server/src/script.py",
      req.body.user,
    ]);
    let prediction = null;

    pythonProcess.stdout.on("data", (data) => {
      console.log(`Data from Python script: ${data}`);
      // Parse the output to extract the prediction value
      prediction = parseInt(data.toString().trim());
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Error from Python script: ${data}`);
      res.status(500).send("Error executing Python script");
    });

    pythonProcess.on("exit", (code) => {
      console.log(`Python script exited with code ${code}`);
      // Send the prediction value back to the client
      return res.send({ Prediction: estimate[prediction] });
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
