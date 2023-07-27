import React from "react";

export const Article = ({ article }) => {
  const { title, source, publishedAt, description, content, urlToImage, url } = article;
  return (
    <div className="article">
      <h2 className="art-title">{title}</h2>
      <img className="art-img" src={urlToImage} alt={description} />
      <p className="art-source">{source.name}</p>
        <p>{publishedAt}</p>

      <p>{content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="source-button">
        Read the rest at {source.name}
      </a>
    </div>
  )
}