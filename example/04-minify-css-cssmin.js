/**
 * Author: Yusuf Shakeel
 * Date: 14-mar-2017 tue
 *
 * Save this file as "Gruntfile.js" in your project folder.
 */
module.exports = function(grunt) {

	//project configurations
	grunt.initConfig({

		cssmin : {
			target : {
				src : ["css/style1.css", "css/style2.css"],
				dest : "dist/style.min.css"
			}
		}

	});

	//load cssmin plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//create default task
	grunt.registerTask("default", ["cssmin"]);

};