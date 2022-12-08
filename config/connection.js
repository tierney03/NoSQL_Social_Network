const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_UR || "mongodb://localhost:27017/NoSQL-Social-Network";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
