module.exports.seedHelpers = (() => { // Module Revealing Pattern
  const _endCommand = int => process.exit(int);
  const _sendMessageToConsole = (msg, msgType, attachment) => console[msgType](msg, attachment);

  return {
    gracefulCommandExit: _endCommand,
    sendMessageToConsole: _sendMessageToConsole
  }
})();