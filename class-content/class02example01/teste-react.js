'use strict';

const el = React.createElement;

function Elemento() {
  return (
    el('h1', {}, 'ola mundo em react') //3 argumentos: html, atributos, conteudo
  )
}

const domContainer = document.querySelector('#react');
ReactDOM.render(el(Elemento, null, null), domContainer);