get "/" do
  erb :index
end

get "/testing" do
  @search_response = HTTParty.get('https://www.googleapis.com/youtube/v3/search?part=snippet&id=%27dogs%27&key=AIzaSyDnPpbokbP8m65k0Sa3LQIicKNlq_61Js4')
  p @search_response
  erb :testing
end