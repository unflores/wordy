require 'sinatra'
require 'json'

set :public_folder, File.dirname(__FILE__) + '/static'
get '/' do
  erb :index
end


get '/words' do
  content_type :json

  { words:[
      {  id: 1,  name: "Je m'en sort",  translation: "I do ok",  type: "expression",  tags: "phrase, vernaculaire"},
      {  id: 2,  name: "Je m'en sort",  translation: "I do ok",  type: "expression",  tags: "phrase, vernaculaire"},
      {  id: 3,  name: "Je m'en sort",  translation: "I do ok",  type: "expression",  tags: "phrase, vernaculaire"}
    ]
  }.to_json
end

get '/words/:word_id' do
  content_type :json
  { word: {  id: 1,  name: "Je m'en sort",  translation: "I do ok",  type: "expression",  tags: "phrase, vernaculaire"}}.to_json
end