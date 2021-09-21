// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var makeRobustRequireResolver = require('robust-require-resolve-pmb'),
  fmt = (process.env.NODEVER_FMT || '%s: %s');

module.exports = function (rqr) {
  var rrr = makeRobustRequireResolver(rqr);
  process.argv.slice(2).sort().forEach(function lookup(p) {
    if (p === '--') { return; }
    var v;
    try {
      v = rrr(p + '/package.json');
      v = rqr(v).version;
    } catch (e) {
      v = String(e);
    }
    console.log(fmt, p, v);
  });
};
