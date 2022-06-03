class Reship2 < ApplicationRecord
  with_options presence: true , numericality: { only_integer: true } do
    validates :flour_g
    validates :flour2_1 , :flour_calculation
    validates :flour2_2 , :flour_calculation
    validates :water2
    validates :salt2
    validates :sugar2
    validates :yeast2
    validates :oil2
  end
end

def flour_calculation
    if flour2_1 + flour2_2 != 100
    end
end