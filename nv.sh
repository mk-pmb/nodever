#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function summarize_node_versions () {
  local PKG=
  for PKG in "$@"; do
    [ -n "$PKG" ] || continue
    PKG="require('$PKG/package.json').version;"
    echo -n "$PKG = "
    nodejs -p "$PKG"
  done
  echo "Node.js $(nodejs --version), npm v$(npm --version
    ), $(lsb_release -sd) $(lsb_release -sc
    ),"
  echo "kernel: $(uname -r
    ), machine/CPU/platform: $(uname -mpi
    )"
  return 0
}










[ "$1" == --lib ] && return 0; summarize_node_versions "$@"; exit $?
