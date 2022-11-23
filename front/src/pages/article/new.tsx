import React, { useState } from "react"
import {createArticle} from "@src/lib/api/articles";
import {Article} from "@src/interfaces";

interface ArticleFormProps {
  articles: Article[]
  setArticles: Function
}

export const ArticleNew: React.FC<ArticleFormProps> = ({ articles,setArticles }) => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState("");
  const [good, setGood] = useState("");
  const [bad, setBad] = useState("");

  const handleCreateArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: Article = {
      title: title,
      description: description,
      good: good,
      bad: bad

    }

    try {
      const res = await createArticle(data)
      console.log(res)

      if (res.status == 200) {
        setArticles([...articles, res.data.article])
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }

    setTitle(""),setDescription(""),setGood(""),setBad("")
  }

  return (
    <form onSubmit={handleCreateArticle}>
      <input
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value)
        }}
      />
      <input
        type="text"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setDescription(e.target.value)
        }}
      />
      <input
        type="text"
        value={good}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGood(e.target.value)
        }}
      />
      <input
        type="text"
        value={bad}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setBad(e.target.value)
        }}
      />
      <input type="submit" value="Add"  />
    </form>
  )
}

export default ArticleNew;