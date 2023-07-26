import React from "react";

export const ArticleCard = ({ title, source, date, urlToImage, desciption }) => {

  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{source.name}</p>
        <p>{date}</p>
      </div>
      <img src={urlToImage} alt="" />
      <p>{desciption}</p>
    </article>
  )
}