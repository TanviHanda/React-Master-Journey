// NoteSection.jsx
import React, { useState } from 'react';

const NoteSection = ({ title, items }) => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <select>
        {
          title.map((m)=>{
            <option value="">{title}</option>
          })
        }
      </select>
      
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