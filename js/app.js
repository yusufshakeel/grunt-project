(function(global){

	"use strict";

	var
		greetings = function () {
			this.message = "Hello World";
		};

		greetings.prototype.getMessage = function() {
			return this.message;
		};

		global.greetings = greetings;

}(typeof window !== "undefined" ? window : this));