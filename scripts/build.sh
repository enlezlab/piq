#!/bin/bash

rm -rf dist
mkdir dist

esbuild ./src/core/piq.js --bundle --format=esm --outfile=./dist/piq.dist.js
