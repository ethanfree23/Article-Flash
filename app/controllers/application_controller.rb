class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    def login!
        session[:user_id] = @user.id
    end
        
    def logged_in?
        !!session[:user_id]
    end
        
    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
        
    def authorized_user?
        @user == current_user
    end
        
    def logout!
        session.clear
    end
        
    def set_user
        @user = User.find_by(id: session[:user_id])
    end
    
end

  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # private

  # def render_not_found(error)
  #     render json: {error: "#{error.model} not found"}, status: :not_found
  # end
  
  # def render_unprocessable_entity(invalid)
  #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity   
  # end