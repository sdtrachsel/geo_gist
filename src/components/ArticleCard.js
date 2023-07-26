import React from "react";

export const ArticleCard = ({ title, source, date, urlToImage, description }) => {

  return (
    <article className="card">
      <div>
        <h2>{title}</h2>
        <p>{source.name}</p>
        <p>{date}</p>
      </div>
      <img className="card-img" src={urlToImage} alt="" />
      <p>{description}</p>
    </article>
  )
}