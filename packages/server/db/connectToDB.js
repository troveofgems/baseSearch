const mongoose = require('mongoose');

module.exports.openDatabaseConnection = async () => {
  const {
    CLOUD_MONGODB_URI, CLOUD_MONGODB_USR, CLOUD_MONGODB_PWD, CLOUD_MONGODB_DBN, CLOUD_MONGODB_PROTOCOL
  } = process.env;

  let dbConnection;

  const
    CLOUD_URI =
      `${CLOUD_MONGODB_PROTOCOL}${CLOUD_MONGODB_USR}:${CLOUD_MONGODB_PWD}${CLOUD_MONGODB_URI}${CLOUD_MONGODB_DBN}`;

  dbConnection = await mongoose.connect(CLOUD_URI);

  if (process.env.NODE_ENV === 'development') {
    console.log(
      `Database Client Connected: ${dbConnection.connection.host}`,
    );
  }

  return dbConnection;
}
