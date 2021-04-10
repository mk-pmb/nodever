// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var findManif = require('resolve-package-path'),
  fmt = (process.env.NODEVER_FMT || '%s: %s');

process.argv.slice(2).sort().forEach(function lookup(p) {
  if (p == '--') { return; }
  var v;
  try {
    v = require(findManif(p)).version;
  } catch (e) {
    v = String(e);
  }
  console.log(fmt, p, v);
});
