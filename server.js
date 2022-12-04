const express = require("mongoose");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.ise(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("/routes"));

mongooose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/NoSQL-Social-Network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

app.listen(PORT, () => console.log("Connected on localhost: ${PORT}"));
