namespace :db do
 
  task :environment do
    
    MIGRATIONS_DIR = 'environment/migrations'
  end
 
  desc 'Migrate the database (options: VERSION=x, VERBOSE=false, ENVIRONMENT=testing).'
  task :migrate => :environment do

    ActiveRecord::Migration.verbose = true
    ActiveRecord::Migrator.migrate MIGRATIONS_DIR, ENV['VERSION'] ? ENV['VERSION'].to_i : nil
  end
 
  desc 'Rolls the schema back to the previous version (specify steps w/ STEP=n).'
  task :rollback => :environment do
    # Reset connection if environment is testing
    step = ENV['STEP'] ? ENV['STEP'].to_i : 1
    ActiveRecord::Migrator.rollback MIGRATIONS_DIR, step
  end
 
  desc "Retrieves the current schema version number"
  task :version => :environment do
    puts "Current version: #{ActiveRecord::Migrator.current_version}"
  end
end