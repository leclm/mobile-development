'use strict';

const el = React.createElement;

// Componente funcional
//function Element(props) {
const Elemento = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

// Componente de classe
class MeuBotao extends React.Component {
  constructor(props) {
    
    super(props);
  }

  render() {
    return (
      <button>
        Clique aqui!
      </button>
    )
  }
}

const domContainer = document.querySelector('#react');
//ReactDOM.render(<Elemento content='Conteúdo com JSX' />, domContainer);
ReactDOM.render(<MeuBotao />, domContainer);