class ReportsController < ApplicationController

	def daily
		fname = "#{Rails.root}/app/assets/daily.txt"
		daily_file = File.open(fname, "r")
		 @contents = daily_file.readlines
	end

	def weekly
		fname = "#{Rails.root}/app/assets/weekly.txt"
		weekly_file = File.open(fname, "r")
		@contents = weekly_file.readlines
	end

	def calendar
		@url = URI.parse('http://ecal.decimalpointanalytics.info/getdata.aspx?viewtype=1&date=20-Sep-2013&country=0&impact=0&timezone=0')

		#@res = Net::HTTP.get_response(URI('http://ecal.decimalpointanalytics.info/getdata.aspx?viewtype=1&date=20-Sep-2013&country=0&impact=0&timezone=0'))
	

		url = 'http://www.engadget.com/rss.xml'
		xml_data = Net::HTTP.get_response(URI.parse(url)).body

		@data = XmlSimple.xml_in(xml_data)



	end
end
