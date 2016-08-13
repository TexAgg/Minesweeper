#!/bin/bash

# Build the files for the app.
# Also, my first bash script. Hooray!

# Set the build directory.
build_dir="src/scripts/build"
# An array of all the compiled typescript files to be compiled again into one single javascript file for the browser.
build_files=($build_dir/main.js $build_dir/Minesweeper.js $build_dir/Square.js)
# The bundled file.
bundle_file="src/scripts/bundle/bundle.js"
# The uglified bundle.
min_file="src/scripts/bundle/bundle.min.js"

# Compile typescript files.
tsc
# Bundle the javascript files for the browser.
browserify ${build_files[*]} -o $bundle_file
# Uglify the bundle.
uglifyjs $bundle_file -c -m -o $min_file