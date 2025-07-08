import React, { useEffect, useState } from 'react';

const FormExample = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : '';
  });

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  });

  const handleChange = (event) => setName(event.target.value);
  const handleClear = () => setName('');

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear name</button>
    </div>
  );
};

export default FormExample;
