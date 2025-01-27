import React from 'react';
import './CardList.scss';
import Card from '../Card/Card';

export default function CardList() {
  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className="content">
      <div className="round-box">
        <ul className="content-sort">
          <li className="content-sort-item active">САМЫЙ ДЕШЕВЫЙ</li>
          <li className="content-sort-item">САМЫЙ БЫСТРЫЙ</li>
          <li className="content-sort-item">ОПТИМАЛЬНЫЙ</li>
        </ul>
      </div>
      <ul className="card-list">
        {cards.map((card) => (
          <Card key={card.id} />
        ))}
      </ul>
      <button type="button" className="card-list-button">
        Показать ещё 5 билетов!
      </button>
    </div>
  );
}
