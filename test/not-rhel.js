var should = require('should')

describe('hasChkconfig', function() {
  it('returns false on non chkconfig-friendly system', function(done) {
    require('../index.js')(function (err, chkconfigPath) {
      err && console.error(err);
      (err===null).should.eql(false);
      (chkconfigPath===undefined).should.eql(true);
      done();
    })
  });
});
