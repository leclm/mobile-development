/*
  Estudando estados em React com componentes funcionais: Hook
*/

'use strict';

const el = React.createElement;

// Componente funcional
const MeuBotaoSubmeter = () => {
  const [clicked, setClicked] = React.useState(false);
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

const domContainer = document.querySelector('#react');
ReactDOM.render(
  <div>
    <MeuBotaoSubmeter />
    <br></br><br></br>
    <MeuBotaoSubmeter />
  </div>, 
  domContainer
);