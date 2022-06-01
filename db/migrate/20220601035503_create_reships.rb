class CreateReships < ActiveRecord::Migration[6.0]
  def change
    create_table :reships do |t|
      t.integer     :flour
      t.integer     :water
      t.integer     :salt
      t.integer     :sugar
      t.integer     :yeast
      t.integer     :oil
      t.timestamps
    end
  end
end