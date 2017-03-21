module.exports = function(grunt) {

	//project configurations
	grunt.initConfig({

		//this is for minifying css files
		cssmin : {
			target : {
				src : ["css/*.css"],
				dest : "dist/style.min.css"
			}
		},

		//this is the watch
		watch : {
			scripts : {
				files : ["css/*.css"],
				tasks : ["cssmin"]
			}
		}

	});

	//load plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//create default task
	grunt.registerTask("default", ["watch"]);

};