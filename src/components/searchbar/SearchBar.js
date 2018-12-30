import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';

library.add(faSearch);

const SearchBar = (props) => {
  const { onChangeText, onSubmit } = props;
  return (
    <div className="container">
      <input type="text" onChange={onChangeText} />
      <button type="button" onClick={onSubmit}>
        <FontAwesomeIcon icon="search" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
