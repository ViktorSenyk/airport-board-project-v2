import moment from 'moment';

export const selectedDateSelector = state => state.board.selectedDate;
export const isDeparturesSelector = state => state.board.isDepartures;
export const searchInfoSelector = state => state.board.searchInfo;

export const filteredFlightsForDisplaySelector = state =>
  state.board.flightsData.filter(flight => {
    return (
      (state.board.isDepartures ? flight.type === 'DEPARTURE' : flight.type === 'ARRIVAL') &&
      flight.codeShare &&
      flight.codeShare.includes(state.board.searchInfo) &&
      moment(flight.departureDateExpected).format('DD-MM-YYYY') === state.board.selectedDate
    );
  });
