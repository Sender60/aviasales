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
          id="checkbox1"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.checkbox1}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="checkbox1">Все</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="checkbox2"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.checkbox2}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="checkbox2">Без пересадок</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="checkbox3"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.checkbox3}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="checkbox3">1 пересадка</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="checkbox4"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.checkbox4}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="checkbox4">2 пересадка</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
      <div className="filter-checkbox">
        <input
          id="checkbox5"
          type="checkbox"
          className="promoted-input-checkbox"
          onChange={handleCheckboxChange}
          checked={checkbox.checkbox5}
        />
        <svg>
          <use href="#checkmark-28" />
        </svg>
        <label htmlFor="checkbox5">3 пересадка</label>
        <svg style={{ display: 'none' }}>
          <symbol id="checkmark-28" viewBox="0 0 24 24">
            <path fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
          </symbol>
        </svg>
      </div>
    </div>
  );
}
