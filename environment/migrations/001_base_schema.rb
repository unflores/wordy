class BaseSchema < ActiveRecord::Migration
  def up
    create_table :words do |t|
      t.string    :name
      t.string    :tags
      t.string    :translation
      t.string    :type
    end
  end

  def down
    drop_table :words
  end
end