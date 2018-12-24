import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './Article.css';

const Article = (props) => {
  const {
    article: {
      source,
      title,
      url,
      urlToImage,
      publishedAt,
      description,
    },
  } = props;

  const momentDate = moment(publishedAt, 'YYYY-MM-DD HH:mm:ss');

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="wrapper"
    >
      <img
        src={urlToImage}
        className="image"
        alt={description}
      />
      <div className="body">
        <span id="title">
          {title.substr(0, title.lastIndexOf('-'))}
        </span>
        <div id="source">
          <span>{source.name}</span>
          <span>&nbsp;· </span>
          <span>{momentDate.fromNow(true)}</span>
        </div>
      </div>
    </a>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
