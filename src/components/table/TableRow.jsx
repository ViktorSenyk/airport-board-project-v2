import React from 'react';
import moment from 'moment';

export default function TableRow({ flightInfo }) {
  const {
    terminal,
    departureCity,
    type,
    departureDateExpected,
    arrivalDateExpected,
    airlineName,
    airlineLogo,
    codeShare,
  } = flightInfo;

  return (
    <div className="table__row">
      <div className="table__cell">
        <div className="table__terminal-circle">{terminal}</div>
      </div>
      <div className="table__cell">{moment(arrivalDateExpected).format('HH:mm')}</div>
      <div className="table__cell">{departureCity}</div>
      <div className="table__cell">{`${type === 'DEPARTURE' ? 'Departed at' : 'Landed'} ${moment(
        departureDateExpected,
      ).format('HH:mm')}`}</div>
      <div className="table__cell">
        <img className="table__logo" src={airlineLogo} alt="logo" />
        {airlineName}
      </div>
      <div className="table__cell">{codeShare}</div>
    </div>
  );
}
