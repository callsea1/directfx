class ReportsController < ApplicationController

	def daily
		@title = "Direct FX - Daily Reports"
		fname = "#{Rails.root}/app/assets/daily.txt"
		daily_file = File.open(fname, "r")
		 @contents = daily_file.readlines
	end

	def weekly
		@title = "Direct FX - Weekly Reports"
		fname = "#{Rails.root}/app/assets/weekly.txt"
		weekly_file = File.open(fname, "r")
		@contents = weekly_file.readlines
	end

	def calendar
		@title = "Direct FX - Economic Calendar"
	end
end
