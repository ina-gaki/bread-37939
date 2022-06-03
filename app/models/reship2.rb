class Reship2 < ApplicationRecord
  with_options presence: true , numericality: { only_integer: true } do
    validates :flour_g
    validates :flour2_1
    validates :flour2_2
    validates :water2
    validates :salt2
    validates :sugar2
    validates :yeast2
    validates :oil2
  end
end
