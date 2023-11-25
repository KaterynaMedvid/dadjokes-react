import React from 'react';

export const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);
