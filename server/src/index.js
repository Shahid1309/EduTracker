import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import http from "http";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Running");
});

const MONGO_URL =
  "mongodb+srv://shahiid1309:1234@cluster0.der98mu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => console.log(error));

app.use("/", router());
