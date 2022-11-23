class Api::V1::ArticlesController < ApplicationController
  def index
    render json: { status: 200, articles: Article.all }
  end

  def create
    article = Article.new(article_params)

    if article.save
      render json: { status: 200, article: article }
    else
      render json: { status: 500, message: "Articleの作成に失敗しました" }
    end
  end

  def destroy
    article = Article.find(params[:id])

    if article.destroy
      render json: { status: 200, article: article }
    else
      render json: { status: 500, message: "Articleの削除に失敗しました" }
    end
  end

  private

  def article_params
    params.require(:article).permit(:title,:description,:good,:bad)
  end
end
