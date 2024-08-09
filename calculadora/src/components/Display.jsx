import React from 'react';

const Display = ({ resultado }) => {
  return (
    <div className="display">
      <h2>Resultado: {resultado}</h2>
    </div>
  );
};

export default Display;