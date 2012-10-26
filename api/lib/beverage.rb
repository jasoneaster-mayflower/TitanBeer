require 'json'

class Beverage
  attr_reader :id,  :name, :brewery, :volumePercentage
  attr_writer :name, :brewery
  
  def initialize(data)
    @id = data[:id] if data[:id]
    @name = data[:name] if data[:name]
    @brewery = data[:brewery] if data[:brewery]
    @volumePercentage = data[:volumePercentage] if data[:volumePercentage]
  end
  
  def id=(id)
    @id = id.to_i
  end

  def volumePercentage=(volume)
    @volumePercentage = volume.to_f
  end
  
  def to_json(*a)
    {
      :id => @id,
      :name => @name,
      :brewery => @brewery,
      :volumePercentage => @volumePercentage
    }.to_json(*a)
  end
end