import {
  IS_DEPARTURES_SET,
  SELECTED_DATE_SET,
  SEARCH_INFO_SET,
  ADD_FLIGHTS_DATA_TO_STORE,
} from './board.actions';
import moment from 'moment';

const urlParams = new URLSearchParams(window.location.search);

const initialState = {
  selectedDate: urlParams.get('selectedDate') || moment().format('DD-MM-YYYY'),
  searchInfo: urlParams.get('searchInfo') || '',
  isDepartures: urlParams.get('isDepartures') === 'false' ? false : true,
  flightsData: [],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DEPARTURES_SET:
      return {
        ...state,
        isDepartures: action.payload.isDeparturesBoolean,
      };
    case SELECTED_DATE_SET:
      return {
        ...state,
        selectedDate: action.payload.newDateValue,
      };
    case SEARCH_INFO_SET:
      return {
        ...state,
        searchInfo: action.payload.newValue,
      };
    case ADD_FLIGHTS_DATA_TO_STORE:
      return {
        ...state,
        flightsData: action.payload.newFlightsData,
      };
    default:
      return state;
  }
};

export default boardReducer;
