require 'rubygems'
require 'bundler'
require 'bundler/setup'
Bundler.require(:default)

# Standard connection
ActiveRecord::Base.establish_connection( 
  adapter:  'sqlite3',
  database: Dir.pwd + '/environment/wordy.sqlite3'
)