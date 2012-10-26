var BeverageModel = require('../model/Beverage');

var Beverages = Ti.App.Backbone.Collection.extend({
	model: BeverageModel,
	
    url: function() {
    	return Ti.App.config.endpoint.url + '/beverages';
    },
    
    /**
     * generate tableDataView data compatible objects
     * 
     */
    toTableData: function() {
    	return this.map(function(e) {
  			return { title: e.get('brewery') + ' ' + e.get('name') };
  		});
    }
});

module.exports = Beverages;