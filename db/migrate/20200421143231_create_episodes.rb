class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :title, null: false
      t.string :description
      t.string :url, null: false
      t.string :thumbs, null: false
      t.belongs_to :section, null: false, foreign_key: true

      t.timestamps
    end
  end
end
