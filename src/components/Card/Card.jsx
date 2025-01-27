import React from 'react';
import './Card.scss';

export default function Card({ id }) {
  return (
    <li key={id} className="card-item">
      <div className="card-item-content">
        <div className="card-item-content-header">
          <span className="card-item-content-header-price">13 400 ₽</span>
          <span className="card-item-content-header-logo">Аэрофлот</span>
        </div>
        <div className="card-item-content-body-variant1">
          <div className="card-item-content-body-time">
            <span className="label">MOW-HKT</span>
            <span>10:45-08:00</span>
          </div>
          <div className="card-item-content-body-travel-time">
            <span className="label">в пути</span>
            <span>21ч 15м</span>
          </div>
          <div className="card-item-content-body-transfer">
            <span className="label">2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
        </div>
        <div className="card-item-content-body-variant2">
          <div className="card-item-content-body-time">
            <span className="label">MOW-HKT</span>
            <span>11:20-00:50</span>
          </div>
          <div className="card-item-content-body-travel-time">
            <span className="label">В ПУТИ</span>
            <span>13ч 30м</span>
          </div>
          <div className="card-item-content-body-transfer">
            <span className="label">1 ПЕРЕСАДКА</span>
            <span>HKG</span>
          </div>
        </div>
      </div>
    </li>
  );
}
