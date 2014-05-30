
dist: dist/baaar.js dist/baaar.css

dist/baaar.js dist/baaar.css: index.js index.css defaults.css
	component build --standalone Baaar --name baaar -o dist
