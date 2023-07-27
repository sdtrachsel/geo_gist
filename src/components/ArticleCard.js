import React from "react";
import PropTypes from 'prop-types';

export const ArticleCard = ({ article, selectArticle }) => {
  const { title, source, publishedAt, description, urlToImage } = article;
  
  return (
    <article className="card" onClick={() => selectArticle(article)}>
      <h2>{title}</h2>
      <div>
        <p className="card-source">{source.name}</p>
        <p>{publishedAt}</p>
      </div>
      <p>{description}</p>
      <img className="card-img" src={urlToImage} alt={title} />
    </article>

  )
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
  }).isRequired,
  selectArticle: PropTypes.func.isRequired,
};