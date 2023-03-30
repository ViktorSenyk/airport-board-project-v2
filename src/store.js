import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './components/board/board.reducer';
import footerReducer from './components/footer/footer.reducer';


const appReducer = combineReducers({
  board: boardReducer,
  footer: footerReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
