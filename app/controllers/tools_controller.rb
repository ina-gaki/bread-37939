class ToolsController < ApplicationController
  def index
  end

  def create
    reship = Reship.create(reship_params)
    render json:{ reship: reship }
  end


  private

  def reship_params
    params.permit(:flour,:water,:salt,:sugar,:yeast,:oil)
  end

end