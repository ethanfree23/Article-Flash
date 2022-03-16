class FlashCardsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: FlashCard.all
    end

    def show
        flashcard = find_flashcard
        render json: flashcard
    end

    def create
        flashcard = FlashCard.create!(flashcard_params)
        render json: flashcard, status: :created
    end

    def update
        flashcard = find_flashcard
        flashcard.update(flashcard_params)
    end

    def destroy
        flashcard = find_flashcard
        flashcard.destroy
        head :no_content
    end

    private

    def find_flashcard
        FlashCard.find(params[:id])
    end

    def flashcard_params
        params.permit(:word, :meaning)
    end
end
