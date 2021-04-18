// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var makeRobustRequire = require('robust-require-resolve-pmb'),
  fmt = (process.env.NODEVER_FMT || '%s: %s');

module.exports = function (rqr) {
  var rrr = makeRobustRequire(rqr);
  process.argv.slice(2).sort().forEach(function lookup(p) {
    if (p === '--') { return; }
    var v;
    try {
      v = rqr(rrr(p + '/package.json')).version;
    } catch (e) {
      v = String(e);
    }
    console.log(fmt, p, v);
  });
};
