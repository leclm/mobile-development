/*
  Estudando estados em React com componentes de classe
*/

'use strict';

const el = React.createElement;

// Componente de classe
class MeuBotaoComprar extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if(this.state.clicked) {
      return ("Comprado!");
    }

    return (
      <button onClick={ () => {
        this.setState({ clicked: true });
        console.log('clicou em comprar');
      }}>
        Comprar
      </button>
    )
  }
}

class MeuBotaoEnviar extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return ("Enviado!"); //redesenha o componente se o botão for clicado
    }

    return (
      <button onClick={ () => {
        this.setState({ clicked: true });
        console.log('clicou em enviar');
      }}>
        Enviar
      </button>
    )
  }
}

const domContainer = document.querySelector('#react');
ReactDOM.render(
  <div>
    <MeuBotaoComprar />
    <br></br><br></br>
    <MeuBotaoEnviar />
  </div>, 
  domContainer
);