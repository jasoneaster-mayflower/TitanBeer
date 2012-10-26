_ = require('lib/lodash');
var Backbone = require('lib/backbone');

var Beverage = Backbone.Model.extend({
	defaults: {
		id: 0,
		name: "",
        brewery: "",
        volumePercentage: 4.5
    }
});

module.exports = Beverage;