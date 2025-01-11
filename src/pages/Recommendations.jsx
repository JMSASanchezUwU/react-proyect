import React from 'react';

const Recommendations = () => {
  return (
    <div className="recommendations-container">
      <h2>Recomendaciones de Salud</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Bebe mucha agua
          <span className="badge bg-success rounded-pill">Nuevo</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Haz ejercicio regularmente
          <span className="badge bg-success rounded-pill">Nuevo</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Duerme lo suficiente
          <span className="badge bg-warning rounded-pill">Actualizado</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Come una dieta balanceada
          <span className="badge bg-success rounded-pill">Nuevo</span>
        </li>
      </ul>
    </div>
  );
};

export default Recommendations;