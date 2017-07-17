# gulp-run-promise
Very much a WIP. Run a gulp task programatically with oh-so-lovely promises 🍭

## Why ?

Cause `gulp.start` is undocumented and there is no easy alternative to start tasks and do something else after its done. Works with gulp 3 and will be updated when gulp 4 is released.

## Usage
```js
const gulp = require('gulp')
const runTask = require('gulp-run-promise')(gulp)

runTask('some-random-task').then(() => {
  // Do something else
}).catch(() => {
  console.error('Error');
})
```

## Note
If you just wanna run your gulp tasks sequentially or just control the order of execution you should ***not*** use this and check out the excellent [run-sequence](https://www.npmjs.com/package/run-sequence) instead.
