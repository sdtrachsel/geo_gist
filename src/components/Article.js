import React from "react";
import PropTypes from 'prop-types';

export const Article = ({ article }) => {
  const { title, source, publishedAt, description, content, urlToImage, url } = article;
  return (
    <div className="article">
      <h2 className="art-title">{title}</h2>
      <img className="art-img" src={urlToImage} alt={description} />
      <p className="art-source">{source.name}</p>
        <p>{publishedAt}</p>

      <p>{content}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="source-button">
        Complete article at {source.name}
      </a>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    description: PropTypes.string,
    content: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string.isRequired,
  })
};