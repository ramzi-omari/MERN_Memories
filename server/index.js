import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// initialize express app
const app = express();

//general settings
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// express middleware to connect router to application
// every route in postRoutes will start with /posts
// this must be after cors()
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://ramzi-omari:ramzi-omari@cluster0.gwtbe.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
// to connect to db:
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    //if connection is successfull
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// to assure not getting a warning
mongoose.set("useFindAndModify", false);
