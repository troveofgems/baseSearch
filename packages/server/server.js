const
  express = require('express'),
  PORT = 3900,
  app = express(),
  { openDatabaseConnection } = require('./db/connectToDB'),
  { mountRouterToApplication } = require('./router');

openDatabaseConnection()
  .then(() => {})
  .catch(err => console.error(err));

mountRouterToApplication(app);

app.listen(PORT, () => {
  console.log('BaseSearch Server Started On Port: ', PORT);
});