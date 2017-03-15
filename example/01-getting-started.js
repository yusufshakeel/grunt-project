/**
 * Author: Yusuf Shakeel
 * Date: 14-mar-2017 tue
 *
 * Save this file as "Gruntfile.js" in your project folder.
 */

module.exports = function(grunt) {
	
	/**
	 * this will print "Hello World"
	 * when we run
	 * $ grunt greetings
	 * on command line
	 */
	grunt.registerTask("greetings", function() {
		console.log("Hello World");
	});

	/**
	 * this is the 2nd task
	 */
	grunt.registerTask("hello", function() {
		console.log("Hello");
	});

	/**
	 * combining the two tasks under one name
	 * "mytasks"
	 */
	grunt.registerTask("mytasks", ["greetings", "hello"]);

	/**
	 * this is the default task
	 * to run this task just type
	 * $ grunt
	 */
	grunt.registerTask("default", ["greetings", "hello"]);

};