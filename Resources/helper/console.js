var console = {
	log: function(message) {
		if (typeof message != "string" && typeof message != "numeric") {
			Ti.API.info(JSON.stringify(message));
		} else {
			Ti.API.info(message);  				
		}
	}
};
  	
module.exports = console;