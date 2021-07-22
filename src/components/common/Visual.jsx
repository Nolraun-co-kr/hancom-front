import React from 'react';

export default function Visual({ type, title, description }) {
  return (
    <div className={`visual ${type ? type : 'product'}`}>
      <div className="txtBox">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
