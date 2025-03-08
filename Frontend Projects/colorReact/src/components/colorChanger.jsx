import React, { useState } from 'react';

const ColorChanger = ({ children }) => {
  const [bgColor, setBgColor] = useState('white'); 

  return (
    <div className='color' style={{ backgroundColor: bgColor,height: '100vh', textAlign: 'center', padding: '20px' }}>
      <div>
        <button onClick={() => setBgColor('red')}>Red</button>
        <button onClick={() => setBgColor('blue')}>Blue</button>
        <button onClick={() => setBgColor('yellow')}>Yellow</button>
        <button onClick={() => setBgColor('green')}>Green</button>
        <button onClick={() => setBgColor('grey')}>Grey</button>
      </div>
      <div style={{ marginTop: '20px' }}>{children}</div> 
    </div>
  );
};

export default ColorChanger;
