module.exports = function(gulp) {
  return function(taskName) {
    if(typeof taskName !== 'string') {
      throw new Error(`${taskName} is not a valid task name.`)
    }

    if(typeof taskName === 'undefined') {
      throw new Error('No task specified to run.')
    }

    if(!gulp.hasTask(taskName)) {
      throw new Error(`Task ${taskName} is not configured as a task on gulp.`)
    }

    return new Promise((resolve, reject) => {
      gulp
        .start(taskName)
        .on('err', (e) => {
          return reject(e)
        })
        .on('stop', (e) => {
          return resolve(e)
        })
    })
  }
}
