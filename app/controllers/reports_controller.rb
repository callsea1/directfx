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

		# url = 'http://testecal.decimalpointanalytics.info/getxmldata.aspx?viewtype=1&date=20-Sep-2013&country=0&impact=0&timezone=0'
		# url = "http://ecal.decimalpointanalytics.info/getxmldata.aspx?viewtype=1&date=10-Oct-2013&country=0&impact=0&timezone=0"
		@time = Time.new

		if params[:weekly] == 1
			weekly = 2
		else
			weekly = 1
		end

		if params[:calendar_date].nil?
			date = @time.strftime("%d-%b-%Y")
		else
			date = params[:calendar_date]
		end

			 # params[:calendar_date] 
			 # params[:weekly] 
			 # params[:timezone] 


		url = "http://ecal.decimalpointanalytics.info/getxmldata.aspx?viewtype=#{weekly}&date=#{date}&country=0&impact=0&timezone=0"
		sub_url = "http://ecal.decimalpointanalytics.info/historyxml.aspx?M008CODE=280486"
		#xml_data = Net::HTTP.get_response(URI.parse(url)).body

		response = HTTParty.get(url)
		@data = response.parsed_response['DocumentElement']['Table']

		#@data = XmlSimple.xml_in(xml_data)



	end
end
