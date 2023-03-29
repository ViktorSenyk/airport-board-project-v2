import React, { useState } from 'react';

import '../styles/search.scss';

export default function Search({ defaultValue, searchInfoSet }) {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  return (
    <div className="search">
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search__wrapper">
        <form>
          <input
            className="search__input"
            type="search"
            placeholder="type flight № ..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <input
            type="submit"
            value="SEARCH"
            className="search__button"
            onClick={e => {
              e.preventDefault();
              searchInfoSet(inputValue);
            }}
          />
        </form>
      </div>
    </div>
  );
}
