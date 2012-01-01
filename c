#!/bin/bash
if [[ $1 == '-i' ]]; then
  repl=--extension
fi
waul --extension ../caterwaul-hijack/hijack.js $repl c.waul.sdoc
