class CreateReship2s < ActiveRecord::Migration[6.0]
  def change
    create_table :reship2s do |t|
      t.integer     :flour_g    
      t.integer     :flour2_1
      t.integer     :flour2_2
      t.integer     :water2
      t.integer     :salt2
      t.integer     :sugar2
      t.integer     :yeast2
      t.integer     :oil2
      t.timestamps
    end
  end
end
