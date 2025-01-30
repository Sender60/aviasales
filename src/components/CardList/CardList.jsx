import React from 'react';
import './CardList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/reducers/sortSlice';
import Card from '../Card/Card';

export default function CardList() {
  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.sort);

  return (
    <div className="content">
      <div className="round-box">
        <ul className="content-sort">
          <li>
            <button
              className={`content-sort-item ${sort === 'cheap' ? 'active' : ''}`}
              type="button"
              onClick={() => dispatch(setSort('cheap'))}
            >
              САМЫЙ ДЕШЕВЫЙ
            </button>
          </li>
          <li>
            <button
              className={`content-sort-item ${sort === 'fast' ? 'active' : ''}`}
              type="button"
              onClick={() => dispatch(setSort('fast'))}
            >
              САМЫЙ БЫСТРЫЙ
            </button>
          </li>
          <li>
            <button
              className={`content-sort-item ${sort === 'optimal' ? 'active' : ''}`}
              type="button"
              onClick={() => dispatch(setSort('optimal'))}
            >
              ОПТИМАЛЬНЫЙ
            </button>
          </li>
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
