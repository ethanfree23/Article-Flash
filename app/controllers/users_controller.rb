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
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
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

    def params_users
        params.permit(:name, :email, :username, :password_digest)
    end
end
