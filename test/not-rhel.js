var should = require('should')

describe('hasChkconfig', function() {
  it('returns false on non chkconfig-friendly system', function(done) {
    require('../index.js')(function (err, chkconfigPath) {
      (err===undefined).should.be.false;
      (chkconfigPath===undefined).should.be.true;
      done();
    })
  });
});
