class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
    end 

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
