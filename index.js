class Logger {
  constructor() {
    this._logs = [];
  }

  log(message, type='log', toConsole=false) {
    let _message = typeof message !== 'string' ? message.toString() : message;
    const _time = new Date().toLocaleTimeString();
    const _log = `${_time}: ${type} - ${_message}`;
    this._logs.push(_log);
    if (toConsole) {
      console.log(_log);
    }
  }

  get() {
    return this._logs;
  }
}

const logger = new Logger();
Object.freeze(logger);

module.exports = logger