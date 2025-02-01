import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CardList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/reducers/sortSlice';
import { addTickets, setStop } from '../../redux/reducers/ticketSlice';
import Card from '../Card/Card';
import { useGetTicketsQuery, useGetSearchIdQuery } from '../../redux/api';

export default function CardList() {
  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.sort);
  const { tickets: qwe } = useSelector((state) => state.ticket);

  const { data: searchIdTickets } = useGetSearchIdQuery();
  const { data: tickets } = useGetTicketsQuery(searchIdTickets, {
    skip: !searchIdTickets,
  });

  const fetchTickets = async () => {
    if (searchIdTickets && tickets && !tickets.stop) {
      console.log(tickets.tickets);
      dispatch(addTickets(tickets.tickets));
      if (tickets.stop) {
        dispatch(setStop(true));
      } else {
        await fetchTickets();
      }
    }
  };

  useEffect(() => {
    fetchTickets();
    console.log(qwe.length);
  }, [searchIdTickets]);

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
        {cards.map(() => (
          <Card key={uuidv4()} />
        ))}
      </ul>
      <button type="button" className="card-list-button">
        Показать ещё 5 билетов!
      </button>
    </div>
  );
}
