/*
  Estudando estados em React com componentes funcionais: Hook
*/

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var el = React.createElement;

// Componente funcional
var MeuBotaoSubmeter = function MeuBotaoSubmeter() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      clicked = _React$useState2[0],
      setClicked = _React$useState2[1];

  if (clicked) {
    return "Clicado com Hook";
  }

  return React.createElement(
    'button',
    { onClick: function onClick() {
        setClicked(true);
      } },
    'Submeter'
  );
};

var domContainer = document.querySelector('#react');
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(MeuBotaoSubmeter, null),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(MeuBotaoSubmeter, null)
), domContainer);