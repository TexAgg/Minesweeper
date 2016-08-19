import os

# Set the build directory.
build_dir = "src/scripts/build"
# An array of all the compiled typescript files to be compiled again into one single javascript file for the browser.
# Make sure all of the corresponding typescript files are included in tsconfig.json.
build_files = [
	build_dir + "/main.js",
	build_dir + "/Minesweeper.js",
	build_dir + "/Square.js"
]
# The bundled file.
bundle_file = "src/scripts/bundle/bundle.js"
# The uglified bundle.
min_file="src/scripts/bundle/bundle.min.js"
# The options to pass to uglifyjs.
min_options = [
	"-c",
	"-m",
	"-o " + min_file
]

############################################

print 'Compiling Typescript files.'
# Compile typescript files.
os.system('tsc')

print 'Bundling javascript files.'
# Bundle the javascript files for the browser.
os.system("browserify " + " ".join(build_files) + " -o " + bundle_file)

print 'Uglifying bundle.'
# Uglify the bundle.
os.system("uglifyjs " + bundle_file + " " + " ".join(min_options))

print 'Done!'