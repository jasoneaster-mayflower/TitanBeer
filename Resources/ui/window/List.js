function ListWindow() {
	var self = Ti.UI.createWindow({
		title: 'List',
		layout: 'vertical'
  	});
  	
  	var Beverages = require('../../collection/Beverages');
  	var beverages = new Beverages();
  	beverages.fetch({
  		success: function() {
	  		Ti.App.console.log(beverages.toTableData());
	  		
	  		var table = Ti.UI.createTableView({
	  			data: beverages.toTableData()
	  		});
			self.add(table);
	  	},
	  	error: function(e) {
	  		Ti.App.console.log(e);
	  	}
  	});
  	
  	return self;
}

module.exports = ListWindow;
