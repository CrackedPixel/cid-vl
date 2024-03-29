import React from 'react';
import './css/main.css';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
