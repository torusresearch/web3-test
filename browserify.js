var browserify = require('browserify')
var fs = require('fs')
try {
var bundler = browserify(__dirname + '/src/main.js', {
  fullPaths: true
})

bundler.bundle().pipe(fs.createWriteStream(__dirname + '/public/bundle.min.js'))
} catch (e) {
  console.log(e)
}