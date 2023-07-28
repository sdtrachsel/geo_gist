import React from "react";
import PropTypes from 'prop-types';

export const ArticleCard = ({ article, selectArticle }) => {
  const { title, source, publishedAt, description, urlToImage } = article;
  
  return (
    <article className="card" onClick={() => selectArticle(article)}>
      <h2 className="card-title">{title}</h2>
      <div>
        <p className="card-source">{source.name}</p>
        <p className="card-date">{publishedAt}</p>
      </div>
      <p className="card-desc">{description}</p>
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