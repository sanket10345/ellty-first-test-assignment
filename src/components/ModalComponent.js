// src/components/ModalComponent.jsx
import React, { useState, useEffect } from 'react';
import './ModalComponent.css';

const ModalComponent = ({ items, selectedItems, setSelectedItems, setShowModal }) => {

  const isAllItemsSelected = () => items.length === selectedItems.length;

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selected => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelectAllClick = () => {
    if (isAllItemsSelected()) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items);
    }
  };
  return (
    <div className="overlay">
      <div className="modal">
      <li className="item select-all">
            <span>All Pages</span>
            <div className={`input-box ${isAllItemsSelected() ? "selected" : ""}`} onClick={() => handleSelectAllClick()}>
              {isAllItemsSelected() && <span className="tick">✔</span>}
            </div>
          </li>
        <ul className="item-list">
          {items.map(item => (
            <li
              key={item}
              className={`item ${selectedItems.includes(item) ? "selected" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              <span>{item}</span>
              <div className={`input-box ${selectedItems.includes(item) ? "selected" : ""}`}>
                {selectedItems.includes(item) && <span className="tick">✔</span>}
              </div>
            </li>
          ))}
        </ul>
        <button className="done-btn" onClick={() => setShowModal(false)}>Done</button>
      </div>
    </div>
  );
};

export default ModalComponent;
