class FlashSetsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: FlashSet.all
    end
    
    def show
        flashset = find_flashset
        render json: flashset
    end

    def create
        # byebug
        # get the current user and associate the flashset with the current user
        user = Session.current_user
        flashset = FlashSet.create!(flashset_params)
        render json: flashset, status: :created
    end

    def update
        flashset = find_flashset
        flashset.update(flashset_params)
    end

    def destroy
        flashset = find_flashset
        flashset.destroy
        head :no_content
    end


    private

    def find_flashset
        FlashSet.find(params[:id])
    end

    def flashset_params
        params.permit(:name)
    end
end
