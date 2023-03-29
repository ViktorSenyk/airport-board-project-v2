import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as boardSelectors from '../board.selectors';
import {
  fetchFlightsData,
  searchInfoSet,
  isDeparturesSet,
  selectedDateSet,
} from '../board.actions';
import Search from './Search';
import Filter from './Filter';
import Table from './Table';

import { useSearchParams } from 'react-router-dom';

import '../styles/board.scss';

function Board({
  isDepartures,
  selectedDate,
  searchInfo,
  fetchFlightsData,
  searchInfoSet,
  isDeparturesSet,
  filteredFlightsForDisplay,
  selectedDateSet,
}) {
  const [, setFilterParams] = useSearchParams();

  useEffect(() => fetchFlightsData(), [fetchFlightsData]);

  useEffect(() => {
    const urlParams = { isDepartures, selectedDate };
    if (searchInfo) urlParams.searchInfo = searchInfo;
    setFilterParams(urlParams);
  }, [setFilterParams, isDepartures, selectedDate, searchInfo]);

  return (
    <section className="board">
      <div className="container">
        <Search defaultValue={searchInfo} searchInfoSet={searchInfoSet} />
        <div className="board__content">
          <Filter
            isDepartures={isDepartures}
            selectedDate={selectedDate}
            isDeparturesSet={isDeparturesSet}
            selectedDateSet={selectedDateSet}
          />
          <Table filteredFlightsForDisplay={filteredFlightsForDisplay} />
        </div>
      </div>
    </section>
  );
}

const mapState = state => ({
  isDepartures: boardSelectors.isDeparturesSelector(state),
  searchInfo: boardSelectors.searchInfoSelector(state),
  selectedDate: boardSelectors.selectedDateSelector(state),
  filteredFlightsForDisplay: boardSelectors.filteredFlightsForDisplaySelector(state),
});

const mapDispatch = {
  fetchFlightsData,
  searchInfoSet,
  isDeparturesSet,
  selectedDateSet,
};

export default connect(mapState, mapDispatch)(Board);
