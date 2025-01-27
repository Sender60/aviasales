import './App.scss';
import React from 'react';
import Filter from './components/Filter/Filter';
import CardList from './components/CardList/CardList';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/image/logo.svg" alt="logo" />
      </header>
      <section className="App-content">
        <Filter />
        <CardList />
      </section>
    </div>
  );
}
