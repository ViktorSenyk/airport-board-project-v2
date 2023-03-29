import { getFlightsData } from './gateway/board';

export const IS_DEPARTURES_SET = 'BOARD/IS_DEPARTURES_SET';
export const SELECTED_DATE_SET = 'BOARD/SELECTED_DATE_SET';
export const SEARCH_INFO_SET = 'BOARD/SEARCH_INFO_SET';
export const ADD_FLIGHTS_DATA_TO_STORE = 'BOARD/ADD_FLIGHTS_DATA_TO_STORE';

export const isDeparturesSet = isDeparturesBoolean => ({
  type: IS_DEPARTURES_SET,
  payload: {
    isDeparturesBoolean,
  },
});

export const selectedDateSet = newDateValue => ({
  type: SELECTED_DATE_SET,
  payload: {
    newDateValue,
  },
});

export const searchInfoSet = newValue => ({
  type: SEARCH_INFO_SET,
  payload: {
    newValue,
  },
});

const addFlightsDataToStore = newFlightsData => ({
  type: ADD_FLIGHTS_DATA_TO_STORE,
  payload: {
    newFlightsData,
  },
});

export const fetchFlightsData = () => dispatch => {
  getFlightsData().then(flightsData => dispatch(addFlightsDataToStore(flightsData)));
};
