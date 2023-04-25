const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/post.routes");
require("dotenv").config();
const port = 5000;
const cors = require("cors");

//connection a la db
connectDB();

const app = express();

const corsOption = {
  origin: "http://127.0.0.1:5173/",
  Credentials: true,
  allowedHeaders: ["sessionId", "Content-type"],
  exposedHeaders: ["sessionId"],
  method: "GET, HEAD, PUT,PATCH,POST,DELETE",
  prefLighContinue: false,
};
//
app.use(cors(corsOption));
app.use(cors());

//middleware qui permet de traiter les donnée de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use("/post", userRoute);

//lancer le serveur
app.listen(port, (req, res) => {
  console.log("connected on port " + port);
});
