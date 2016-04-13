var should = require('should')

describe('hasChkconfig', function() {
  it('returns true on chkconfig-friendly system', function(done) {
    require('../index.js')(function (err, chkconfigPath) {
      err && console.error(err);
      (err===null).should.eql(true);
      (chkconfigPath).should.match(/chkconfig$/);
      done();
    })
  });
});
