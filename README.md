# jpks-logger

## A very small logger that saves what was logged.

### Usage

```javascript
const logger = require('jpks-logger');
logger.log('Hello world!');
logger.log('Something happened!', 'info');
logger.log('Please consider foo!', 'warn');
logger.log('Error! Error!', 'error', true);
logger.log('foobar', 'bar', true);

logger.get();
/* [
'hh:mm:ss: log - Hello world!',
'hh:mm:ss: info - Something happened!',
'hh:mm:ss: warn - Please consider foo!',
'hh:mm:ss: error - Error! Error!',
'hh:mm:ss: bar - foobar'
] */
```