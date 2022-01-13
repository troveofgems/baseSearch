const
  express = require('express'),
  PORT = 3900,
  app = express(),
  { openDatabaseConnection } = require('./db/connectToDB'),
  { mountRouterToApplication } = require('./router');

openDatabaseConnection()
  .then(() => {})
  .catch(err => console.error(err));

app.use(express.json());

mountRouterToApplication(app);

app.listen(PORT, () => {
  console.log('At Ease Server Started On Port: ', PORT);
});