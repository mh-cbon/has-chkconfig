var spawn = require('child_process').spawn;

var hasChkconfig = function (then) {
  var c = spawn('chkconfig', ['--version'], {stdio: 'pipe'})
  c.stdout.on('data', function (d){
    d = d.toString()
    if (d.match(/^chkconfig version .+/)) {
      then && then(null, 'chkconfig');
      then = null;
    }
  })
  c.on('error', function (err) {
    then && then(err);
    then = null;
  })
  c.on('close', function (code){
    if (code===0) then && then(null, 'chkconfig')
    else then && then("chkconfig not found")
    then = null;
  })
}

module.exports = hasChkconfig
