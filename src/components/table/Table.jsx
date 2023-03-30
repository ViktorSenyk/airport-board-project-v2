import React from 'react';
import TableRow from './TableRow';

import './table.scss';

export default function Table({ filteredFlightsForDisplay }) {
  return (
    <div className="table">
      {filteredFlightsForDisplay.length === 0 ? (
        <h5 className="table__null">No Flights</h5>
      ) : (
        <>
          <div className="table__title">
            <div className="table__cell">Terminal</div>
            <div className="table__cell">Local time</div>
            <div className="table__cell">Destination</div>
            <div className="table__cell">Status</div>
            <div className="table__cell">Airline</div>
            <div className="table__cell">Flight</div>
          </div>

          {filteredFlightsForDisplay.map(flightInfo => (
            <TableRow key={flightInfo.id} flightInfo={flightInfo} />
          ))}
        </>
      )}
    </div>
  );
}
