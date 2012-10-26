function ApplicationTabGroup(HomeWindow, ListWindow) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	self.setBackgroundColor('#ffffff');
	
	var homeWindow = new HomeWindow();
	var listWindow = new ListWindow();
	
	var homeTab = Ti.UI.createTab({
		title: 'Home',
		window: homeWindow
	});
	//homeTab.containingTab = tab1;
	
	var listTab = Ti.UI.createTab({
		title: 'List',
		window: listWindow
	});
	//listTab.containingTab = tab2;
	
	self.addTab(homeTab);
	self.addTab(listTab);
	
	return self;
};

module.exports = ApplicationTabGroup;
