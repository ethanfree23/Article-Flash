class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # private

  # def render_not_found(error)
  #     render json: {error: "#{error.model} not found"}, status: :not_found
  # end
  
  # def render_unprocessable_entity(invalid)
  #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity   
  # end
end
