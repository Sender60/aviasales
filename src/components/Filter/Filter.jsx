import React from 'react';
import './Filter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckbox } from '../../redux/reducers/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const { checkbox } = useSelector((state) => state.filter);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const checkboxChecked = { id, checked };
    dispatch(setCheckbox(checkboxChecked));
  };

  return (
    <div className="filter">
      <h4 className="filter-title">Количество пересадок</h4>
      <div className="filter-checkbox">
        <input
          id="allTickets"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.allTickets}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="allTickets">Все</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input id="noStop" type="checkbox" className="promoted-input-checkbox" onChange={handleCheckboxChange} checked={checkbox.noStop} />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="noStop">Без пересадок</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="oneStop"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.oneStop}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="oneStop">1 пересадка</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="twoStop"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.twoStop}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="twoStop">2 пересадка</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="threeStop"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.threeStop}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="threeStop">3 пересадка</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
    </div>
  );
}
