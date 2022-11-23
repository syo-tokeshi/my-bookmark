import client from "./client"
import { Article } from "../../interfaces/index"

// todo一覧を取得
export const getArticles = () => {
  return client.get("/articles")
}

// todoを新規作成
export const createArticle = (data: Article) => {
  return client.post("/articles", data)
}

// todoを削除
export const deleteArticle = (id: number) => {
  return client.delete(`/articles/${id}`)
}