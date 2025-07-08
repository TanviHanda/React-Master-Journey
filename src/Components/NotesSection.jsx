// NoteSection.jsx
import React, { useState } from 'react';

const NoteSection = ({ title, items }) => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h1>{title}</h1>
      <button style={{backgroundColor:"black",color:"white",padding:"6px 12px"}} onClick={() => setShow(prev => !prev)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default NoteSection;