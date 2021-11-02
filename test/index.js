const logger = require('../index');

function check(description, fn) {
  if (fn()) {
    console.log(`${description}: Success`);
  } else {
    throw new Error(`${description}: Failure`);
  }
}

check('Logger returns foo', () => {
  logger.log('foo');
  console.log(logger.get())
  return logger.get().some(i => i.match('foo'))
});

check('Logger returns bar', () => {
  logger.log('bar');
  return logger.get().some(i => i.match('bar')) && logger.get().some(i => i.match('foo'))
});

check('Logger can log array', () => {
  logger.log(['1', '2']);
  return logger.get().some(i => i.match('[1, 2]'))
});
