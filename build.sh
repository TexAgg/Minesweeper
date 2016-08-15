#!/bin/bash

# Build the files for the app.
# Usually Grunt or Gulp is used but my build is pretty simple.
# Also, my first bash script. Hooray!

############################################

# Set the build directory.
build_dir="src/scripts/build"
# An array of all the compiled typescript files to be compiled again into one single javascript file for the browser.
# Make sure all of the corresponding typescript files are included in tsconfig.json.
build_files=($build_dir/main.js $build_dir/Minesweeper.js $build_dir/Square.js)
# The bundled file.
bundle_file="src/scripts/bundle/bundle.js"
# The uglified bundle.
min_file="src/scripts/bundle/bundle.min.js"
# The options to pass to uglifyjs.
min_options=("-c" "-m" "-o $min_file")

############################################

echo 'Compiling Typescript files.'
# Compile typescript files.
tsc

echo 'Bundling javascript files.'
# Bundle the javascript files for the browser.
browserify ${build_files[*]} -o $bundle_file

echo 'Uglifying bundle.'
# Uglify the bundle.
uglifyjs $bundle_file ${min_options[*]}

echo 'Done!'