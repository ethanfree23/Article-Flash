class UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update(user_params)
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private
    
    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :email, :first_name, :last_name, :country)
    end
end
