_ = require('lib/lodash');
var Backbone = require('lib/backbone');
var BeverageModel = require('../model/Beverage');

var Beverages = Backbone.Collection.extend({
	model: BeverageModel,
    url: '/data/beers.json'
});

module.exports = Beverages;