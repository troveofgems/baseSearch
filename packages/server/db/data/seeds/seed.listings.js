const
  Listing = require("../../models/Listing"),
  listingSeeds = require("../json/listing.json"),
  { openDatabaseConnection } = require('../../connectToDB'),
  { sendMessageToConsole, gracefulCommandExit } = require('../../../helpers/lib/seed.helpers').seedHelpers;

////////////////////////////
/** TERMINAL CLI RUNTIME **/
////////////////////////////
const
  doNothing = () => {},
  command = process.argv[2],
  runCommand = async command => await processCommandForListings(command);

openDatabaseConnection().then(() => {
  return runCommand(command)
    .then(doNothing)
    .catch(err => {
      console.error("Encountered An Error While Attempting To Manage The DB", err);
      return gracefulCommandExit(1);
    });
}).catch(err => sendMessageToConsole('Error Occurred', 'error', err));

//////////////////////////////////////
/** Elements Below Will Be Hoisted **/
//////////////////////////////////////
const processCommandForListings = async command => {
  switch(command) {
    case "-d":
      await clearDBOfListings();
      break;
    case "-i":
      await seedDBWithListings();
      break;
    default:
      console.log('No Valid Parameter Passed. Please re-run the command with the appropriate flag');
      return process.exit(1);
  }
};
const clearDBOfListings = async () => {
  try {
    await Listing.deleteMany();
    sendMessageToConsole("Listings Cleared", "log");
    gracefulCommandExit(0);
  } catch (err) {
    sendMessageToConsole("Error Occurred", "error", err);
    gracefulCommandExit(1);
  }
};
const seedDBWithListings = async () => {
  try {
    await Listing.insertMany(listingSeeds);
    sendMessageToConsole("Inserted Listings", "log");
    gracefulCommandExit(0);
  } catch (err) {
    sendMessageToConsole('Error Occurred', "error", err);
    gracefulCommandExit(1);
  }
};
