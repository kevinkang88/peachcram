Againpeach::Application.routes.draw do

  root to: 'pages#main'
  get '/song_maker/level_one', to: 'ytplayers#level_one_song_maker'
end
