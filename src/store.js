import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './components/board/board.reducer';

const appReducer = combineReducers({
  board: boardReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
