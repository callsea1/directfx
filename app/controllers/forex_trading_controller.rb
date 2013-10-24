class ForexTradingController < ApplicationController


	def currensee
	end

	def mt4_live_account_signup
	end

	def mt4_live_bonus
	end

	def mt4_demo_account_signup
	end

	def mt4_demo_confirmation
	end

	def download_pdf
    send_file "#{Dir.getwd}/public/pdf/#{params[:pdf]}", :type=>"application/pdf", :x_sendfile=>true
	end

end
