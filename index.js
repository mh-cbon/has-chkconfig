var spawn = require('child_process').spawn;

var hasChkconfig = function (then) {
  var c = spawn('chkconfig', ['--version'], {stdio: 'pipe'})
  c.stdout.on('data', function (d){
    d = d.toString()
    if (d.match(/^chkconfig version .+/)) {
      then(null, 'chkconfig'); then = null;
    }
  })
  c.on('error', then)
  c.on('close', function (code){
    then && then(code > 0 ? "error" : null, 'chkconfig')
  })
}

module.exports = hasChkconfig
