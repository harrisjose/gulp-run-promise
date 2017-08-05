[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![npm](https://img.shields.io/npm/v/gulp-run-promise.svg?style=flat-square)](https://www.npmjs.com/package/gulp-run-promise)

# gulp-run-promise
Run a gulp task programatically with oh-so-lovely promises 🍭

## Why ?

Cause `gulp.start` is undocumented and there is no easy alternative to start tasks and do something else after its done. Works with gulp 3 and will be updated when gulp 4 is released.

## Usage
```js
const gulp = require('gulp')
const runTask = require('gulp-run-promise')(gulp)

runTask('some-random-task').then(() => {
  // Do something else
}).catch((error) => {
  console.error(`Error: ${error}`);
})
```

## Notes
This works by listening to `err` and `stop` events emitted by [orchestrator](https://github.com/robrich/orchestrator) which is what gulp uses under the hood to run tasks. If you just want to run your gulp tasks sequentially or just control the order of execution you should ***not use this*** and check out the excellent [run-sequence](https://www.npmjs.com/package/run-sequence) instead.  


[![Sponsor](https://app.codesponsor.io/embed/T5F1SFV1gZFb51jKqxPnDwsg/harrisjose/gulp-run-promise.svg)](https://app.codesponsor.io/link/T5F1SFV1gZFb51jKqxPnDwsg/harrisjose/gulp-run-promise)
