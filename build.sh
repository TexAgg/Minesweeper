#!/bin/bash

# Build the files for the app.
# Also, my first bash script. Hooray!

# Set the build directory.
build_dir="src/scripts/build"
# An array of all the compiled typescript files to be compiled again into one single javascript file for the browser.
build_files=($build_dir/main.js $build_dir/Minesweeper.js $build_dir/Square.js)

# Compile typescript files.
tsc
browserify ${build_files[*]} -o src/scripts/bundle/bundle.js