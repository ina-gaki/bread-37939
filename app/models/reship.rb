class Reship < ApplicationRecord
  with_options presence: true , numericality: { only_integer: true } do
    validates :flour
    validates :water
    validates :salt
    validates :sugar
    validates :yeast
    validates :oil
  end
end