import React from "react";

export const Article = ({ article }) => {
  const { title, source, publishedAt, description,content, urlToImage,url } = article;
  return (
    <div>
      <img className="art-img" src={urlToImage} alt={description} />
      <h2>{title} </h2>
      <p>{source.name}</p>
        <p>{publishedAt}</p>
        <p>{content}</p>
        
    </div>
  )
}