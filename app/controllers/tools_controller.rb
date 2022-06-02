class ToolsController < ApplicationController
  def index
  end

  def create
      reship = Reship.create(reship_params)
      reship2 = Reship2.create(reship2_params)
    render json:{reship: reship , reship2: reship2 }
  end


  private

  def reship_params
    params.permit(:flour,:water,:salt,:sugar,:yeast,:oil)
  end

  def reship2_params
    params.permit(:flour_g,:flour2_1,:flour2_2,:water2,:salt2,:sugar2,:yeast2,:oil2)
  end
end