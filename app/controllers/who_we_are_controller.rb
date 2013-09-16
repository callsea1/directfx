class WhoWeAreController < ApplicationController

	def show
		@title = "Direct FX - Who We Are"
	end

	def regulation
		@title = "Direct FX - Regulation"
	end

	def press
		@title = "Direct FX - Press Releases"
	end
end
