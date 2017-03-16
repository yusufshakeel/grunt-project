/**
 * Author: Yusuf Shakeel
 * Date: 14-mar-2017 tue
 *
 * Save this file as "Gruntfile.js" in your project folder.
 */
module.exports = function(grunt) {

	//project configurations
	grunt.initConfig({

		uglify : {

			options : {
				banner : "/*! app.min.js file */\n"
			},
			build : {
				src : ["js/app.js"],
				dest : "dist/app.min.js"
			}

		}

	});

	//load uglify plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//create default task
	grunt.registerTask("default", ["uglify"]);

};