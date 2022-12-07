const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_UR || 'mongodb://127.0.0.1"27017/usersDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
