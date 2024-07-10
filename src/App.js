// src/App.js
import React, { useState } from 'react';
import './App.css';
import ModalComponent from './components/ModalComponent';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const items = ["Page 1", "Page 2", "Page 3", "Page 4"];

  return (
    <div className="App">
      <h1>First Test Assignment</h1>
      <ul className="main-page-list">
        {selectedItems.map(item => (
          <li key={item} className="main-page-item">
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <ModalComponent
          items={items}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
