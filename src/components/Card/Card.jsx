import React from 'react';
import './Card.scss';
import { format, addMinutes } from 'date-fns';

export default function Card({ id, tickets }) {
  const { price, carrier, segments } = tickets;
  const peresadka = {
    0: 'без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  };

  const getDurationTime = (duration) => {
    const newDate = new Date(0, 0, 0, 0, duration);
    return `${newDate.getHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <li key={id} className="card-item">
      <div className="card-item-content">
        <div className="card-item-content-header">
          <span className="card-item-content-header-price">{price} ₽</span>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="лого компании" />
        </div>
        {segments.map((segment, index) => (
          <div className={`card-item-content-body-direction-${index}`}>
            <div className="card-item-content-body-time">
              <span className="label">
                {segment.origin} - {segment.destination}
              </span>
              <span>{`${format(new Date(segment.date), 'HH:mm')} - ${format(addMinutes(new Date(segment.date), segment.duration), 'HH:mm')}`}</span>
            </div>
            <div className="card-item-content-body-travel-time">
              <span className="label">в пути</span>
              <span>{getDurationTime(segment.duration)}</span>
            </div>
            <div className="card-item-content-body-transfer">
              <span className="label">{peresadka[segment.stops.length]}</span>
              <span>{segment.stops.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}
