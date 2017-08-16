/* globals require */

module.exports = function(grunt) { // jshint ignore:line
	'use strict';
	
	var compass = require('compass-importer');
	
	grunt.initConfig({
		pkg:        grunt.file.readJSON('package.json'),
		sass:       {
			dist: {
				options: {
					sourceMap:         true,
					sourceMapContents: true,
					outputStyle:       'compressed',
					importer:          compass,
					includePaths:      ['./node_modules/normalize.scss/']
				},
				files: {
					'style.css': 'scss/screen.scss'
				}
			},
		},
		watch:      {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', [
		'sass'
	]);
};