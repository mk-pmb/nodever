#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-


function summarize_node_versions () {
  [ "$#" == 0 ] || nodejs -e "require('nodever')(require)" -- -- "$@"
  echo "Node.js $(nodejs --version), npm v$(npm --version
    ), $(lsb_release -sd) $(lsb_release -sc
    ),"
  echo "kernel: $(uname -r
    ), machine/CPU/platform: $(uname -mpi
    )"
  return 0
}










summarize_node_versions "$@"; exit $?
