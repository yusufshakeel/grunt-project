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