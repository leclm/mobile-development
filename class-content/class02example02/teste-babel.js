'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var el = React.createElement;

// Componente funcional
//function Element(props) {
var Elemento = function Elemento(props) {
  return React.createElement(
    'h1',
    null,
    props.content
  );
};

// Componente de classe

var MeuBotao = function (_React$Component) {
  _inherits(MeuBotao, _React$Component);

  function MeuBotao(props) {
    _classCallCheck(this, MeuBotao);

    return _possibleConstructorReturn(this, (MeuBotao.__proto__ || Object.getPrototypeOf(MeuBotao)).call(this, props));
  }

  _createClass(MeuBotao, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        null,
        'Clique aqui!'
      );
    }
  }]);

  return MeuBotao;
}(React.Component);

var domContainer = document.querySelector('#react');
//ReactDOM.render(<Elemento content='Conte??do com JSX' />, domContainer);
ReactDOM.render(React.createElement(MeuBotao, null), domContainer);