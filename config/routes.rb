DirectfxRails::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
   root 'site#index'
   get '/get_in_touch' => 'site#contact', as: :contact
   get '/introducing_broker' => 'site#introducing_broker', as: :introducing_broker
   get '/introducing_broker_thank_you' => 'site#introducing_broker_confirmation', as: :introducing_broker_confirmation

   get '/who_we_are' => 'who_we_are#show', as: :who
   get '/regulation' => 'who_we_are#regulation', as: :regulation
   get '/press_release' => 'who_we_are#press', as: :press_release

   get '/reports/daily' => 'reports#daily', as: :daily_report
   get '/reports/weekly' => 'reports#weekly', as: :weekly_report

   match '/economic_calendar' => 'reports#calendar', via: [:get, :post]

   get '/currensee' => 'forex_trading#currensee', as: :currensee
   get '/mt4_live_account_signup' => 'forex_trading#mt4_live_account_signup', as: :mt4_live_account_signup
   get '/mt4_cash_bonus' => 'forex_trading#mt4_live_bonus', as: :mt4_live_bonus
   get '/mt4_demo_account_signup' => 'forex_trading#mt4_demo_account_signup', as: :mt4_demo_account_signup
   get '/mt4_demo_thank_you' => 'forex_trading#mt4_demo_confirmation', as: :mt4_demo_confirmation
   get '/mt4_live_thank_you' => 'forex_trading#mt4_live_confirmation', as: :mt4_live_confirmation

   get '/binary_options' => 'binary_options#show', as: :binary_options
   get '/binary_options_thank_you' => 'binary_options#binary_options_confirmation', as: :binary_options_confirmation
   get '/binary_options_support' => 'binary_options#support', as: :binary_support
   get '/forex'          => 'binary_options#forex', as: :forex
   get '/metals'         => 'binary_options#metals', as: :metals
   get '/cfd'            => 'binary_options#cfd', as: :cfd

   get "download_pdf" => 'forex_trading#download_pdf', :as => :download_pdf

end
