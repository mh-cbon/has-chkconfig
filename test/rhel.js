var should = require('should')

describe('hasChkconfig', function() {
  it('returns true on chkconfig-friendly system', function(done) {
    require('../index.js')(function (err, chkconfigPath) {
      (err===undefined).should.be.true;
      (chkconfigPath).should.match(/chkconfig$/);
      done();
    })
  });
});
