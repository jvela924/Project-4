class TipsController < ApplicationController

    def index
        render json: Tip.all
    end

    def show
        render json: Tip.find(params["id"])
    end

    def create
        render json: Tip.create(params["art"])
    end

    def delete
        render json: Tip.delete(params["id"])
    end

    def update
        render json: Tip.update(params["id"], params["art"])
    end

end
