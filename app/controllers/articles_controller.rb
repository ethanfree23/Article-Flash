class ArticlesController < ApplicationController
   # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: Article.all
    end

    def show
        article = find_article
        render json: article
    end

    private
    def find_article
        Article.find(params[:id])
    end
end
