require File.dirname(__FILE__) + '/lib/beverage'
require 'sinatra'


get '/beverages' do
  beverages = [
    Beverage.new({:id => 1, :name => 'Edelstoff', :brewery => 'Augustiner', :volumePercentage => 5.4}),
    Beverage.new({:id => 2, :name => 'Helles', :brewery => 'Augustiner', :volumePercentage => 5.5}),
    Beverage.new({:id => 3, :name => 'Weissbier', :brewery => 'Paulaner', :volumePercentage => 4.9})
  ];
  
  beverages.to_json
end