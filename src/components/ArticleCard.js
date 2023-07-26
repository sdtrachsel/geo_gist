import React from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article, selectArticle }) => {
  const { title, source, publishedAt, description, urlToImage } = article;
  return (

    <article className="card" onClick={() => selectArticle(article)}>
      <h2>{title}</h2>
      <div>
        <p>{source.name}</p>
        <p>{publishedAt}</p>
      </div>
      <p>{description}</p>
      <img className="card-img" src={urlToImage} alt={title} />
    </article>

  )
}