var Beverage = Backbone.Model.extend({
	defaults: {
		id: 0,
		name: "",
        brewery: "",
        volumePercentage: 4.5
    }
});

module.exports = Beverage;