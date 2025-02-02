import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CardList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/reducers/sortSlice';
import { addTickets, setStop } from '../../redux/reducers/ticketSlice';
import Card from '../Card/Card';
import { useGetTicketsQuery, useGetSearchIdQuery } from '../../redux/api';

export default function CardList() {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.sort);
  const { tickets: cardsList, stop } = useSelector((state) => state.ticket);
  const [visibleTickets, setVisibleTickets] = useState(5);

  const { data: searchIdTickets, isLoading } = useGetSearchIdQuery();
  const {
    data: tickets,
    refetch,
    error,
  } = useGetTicketsQuery(searchIdTickets, {
    skip: !searchIdTickets,
  });

  useEffect(() => {
    if (error && error.response && error.response.status === 500) {
      refetch();
    }
    if (searchIdTickets) {
      if (tickets) {
        dispatch(addTickets(tickets.tickets));
        if (tickets.stop) {
          dispatch(setStop(true));
        } else {
          refetch();
        }
      }
    }
  }, [searchIdTickets, stop, tickets, error]);

  const renderContent = () => {
    if (stop && !isLoading) {
      return (
        <>
          <ul className="card-list">
            {cardsList.slice(0, visibleTickets).map((card) => (
              <Card key={uuidv4()} tickets={card} />
            ))}
          </ul>
          <button onClick={() => setVisibleTickets(visibleTickets + 5)} type="button" className="card-list-button">
            Показать ещё 5 билетов!
          </button>
        </>
      );
    }
    return <span className="loader" />;
  };

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
      {renderContent()}
    </div>
  );
}
