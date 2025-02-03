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
  const { checkbox } = useSelector((state) => state.filter);

  const { tickets: cardsList, stop } = useSelector((state) => state.ticket);
  const [visibleTickets, setVisibleTickets] = useState(5);
  const { allTickets, noStop, oneStop, twoStop, threeStop } = checkbox;

  const filteredCards = cardsList.filter((card) => {
    if (allTickets) {
      return true;
    }
    const stopsCount = card.segments[0].stops.length;
    const stops = [];
    if (noStop) {
      stops.push(0);
    }
    if (oneStop) {
      stops.push(1);
    }
    if (twoStop) {
      stops.push(2);
    }
    if (threeStop) {
      stops.push(3);
    }
    return stops.includes(stopsCount);
  });

  const sortedFilteredCards = filteredCards.sort((a, b) => {
    if (sort === 'price') {
      return a.price - b.price;
    }
    if (sort === 'time') {
      return a.segments[0].duration - b.segments[0].duration;
    }
    if (sort === 'optimal') {
      return a.segments[0].duration + a.price - (b.segments[0].duration + b.price);
    }
    return 0;
  });

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
            {sortedFilteredCards.slice(0, visibleTickets).map((card) => (
              <Card key={uuidv4()} tickets={card} />
            ))}
          </ul>
          {sortedFilteredCards.length > visibleTickets && (
            <button onClick={() => setVisibleTickets(visibleTickets + 5)} type="button" className="card-list-button">
              Показать ещё 5 билетов!
            </button>
          )}
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
              className={`content-sort-item ${sort === 'price' ? 'active' : ''}`}
              type="button"
              onClick={() => dispatch(setSort('price'))}
            >
              САМЫЙ ДЕШЕВЫЙ
            </button>
          </li>
          <li>
            <button
              className={`content-sort-item ${sort === 'time' ? 'active' : ''}`}
              type="button"
              onClick={() => dispatch(setSort('time'))}
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
      {Object.keys(checkbox).every((key) => !checkbox[key]) && <div>Рейсов, подходящих под заданные фильтры, не найдено</div>}
      {renderContent()}
    </div>
  );
}
