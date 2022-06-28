import React, { useState } from 'react';

// Componente funcional
const MeuBotaoSubmeter = () => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return ("Clicado com Hook");
  }
  
  return (
    <button onClick={ () => {
      setClicked(true);
    }}>
      Submeter
    </button>
  );
};

export default MeuBotaoSubmeter;