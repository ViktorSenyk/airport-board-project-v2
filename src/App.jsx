import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Board from './components/board/Board';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Board />
      </main>
      <Footer />
    </Provider>
  );
}
