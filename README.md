# jpks-logger

## A very small logger that saves what was logged.

[![Tests](https://github.com/jpkmiller/jpks-logger/actions/workflows/run-test.js.yml/badge.svg)](https://github.com/jpkmiller/jpks-logger/actions/workflows/run-test.js.yml)
[![DeepScan grade](https://deepscan.io/api/teams/16386/projects/19651/branches/513388/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16386&pid=19651&bid=513388)

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

### Testing

```shell
npm run test
```
