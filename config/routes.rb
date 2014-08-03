Againpeach::Application.routes.draw do
  root to: 'pages#main'
  get '/song_maker/level_one', to: 'ytplayers#level_one_song_maker'
  get '/song_maker/level_two', to: 'ytplayers#level_two_song_maker'
  get '/song_maker/level_three', to: 'ytplayers#level_three_song_maker'
  get '/song_maker/level_four', to: 'ytplayers#level_four_song_maker'
  get '/guide', to: 'pages#guide'
end


