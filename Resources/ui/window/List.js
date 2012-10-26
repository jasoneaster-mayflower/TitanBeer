function ListWindow() {
	var self = Ti.UI.createWindow({
		title: 'List',
		layout: 'vertical'
  	});
  	
  	var Beverage = require('../../model/Beverage');
  	
  	var beverage1 = new Beverage({id: 1, name: "Bier 1", brewery: "Brewery 1", volumePercentage: "2.4"});
  	var beverage2 = new Beverage({id: 2, name: "Bier 2", brewery: "Brewery 2", volumePercentage: "2.6"});
  	var beverage3 = new Beverage({id: 3, name: "Bier 3", brewery: "Brewery 3", volumePercentage: "2.9"});
  	var beverage4 = new Beverage({id: 4, name: "Bier 4", brewery: "Brewery 4", volumePercentage: "2.2"});
  	
  	var Beverages = require('../../collection/Beverages');
  	
  	var beverages = new Beverages([beverage1, beverage2, beverage3, beverage4]);
  	
  	var tableData = beverages.map(function(e) {
  		return { title: e.get('name') };
  	});
  	
  	var table = Ti.UI.createTableView({
  		data: tableData
  	});
  	
  	self.add(table);
  	
  	return self;
}

module.exports = ListWindow;
