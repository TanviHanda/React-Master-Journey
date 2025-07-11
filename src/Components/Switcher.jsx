import React, { useState } from 'react';

const Switcher = () => {
  const [sw, setSw] = useState(false);

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: sw ? '#1e1e2f' : '#f5f5f5',
      color: sw ? '#ffffff' : '#1e1e2f',
      transition: 'all 0.4s ease-in-out',
      fontFamily: 'Segoe UI, sans-serif',
    },
    input: {
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '16px',
      marginTop: '20px',
      backgroundColor: sw ? '#2e2e3e' : '#ffffff',
      color: sw ? '#fff' : '#000',
      transition: 'all 0.3s ease-in-out',
    },
    button: {
      marginTop: '20px',
      padding: '10px 25px',
      border: 'none',
      borderRadius: '25px',
      backgroundColor: sw ? '#6c63ff' : '#333',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
    },
    modeLabel: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
      letterSpacing: '1px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.modeLabel}>
        {sw ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </div>
      <input
        type="text"
        key={sw ? 'dark' : 'light'}
        style={styles.input}
        placeholder={sw ? 'Type in dark mode...' : 'Type in light mode...'}
      />
      <button style={styles.button} onClick={() => setSw((s) => !s)}>
        Switch to {sw ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Switcher;
