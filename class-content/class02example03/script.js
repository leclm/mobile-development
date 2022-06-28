/*
  Estudando estados em React com componentes de classe
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var el = React.createElement;

// Componente de classe

var MeuBotaoComprar = function (_React$Component) {
  _inherits(MeuBotaoComprar, _React$Component);

  function MeuBotaoComprar(props) {
    _classCallCheck(this, MeuBotaoComprar);

    var _this = _possibleConstructorReturn(this, (MeuBotaoComprar.__proto__ || Object.getPrototypeOf(MeuBotaoComprar)).call(this, props));

    _this.state = { clicked: false };
    return _this;
  }

  _createClass(MeuBotaoComprar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.clicked) {
        return "Comprado!";
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            _this2.setState({ clicked: true });
            console.log('clicou em comprar');
          } },
        'Comprar'
      );
    }
  }]);

  return MeuBotaoComprar;
}(React.Component);

var MeuBotaoEnviar = function (_React$Component2) {
  _inherits(MeuBotaoEnviar, _React$Component2);

  function MeuBotaoEnviar(props) {
    _classCallCheck(this, MeuBotaoEnviar);

    var _this3 = _possibleConstructorReturn(this, (MeuBotaoEnviar.__proto__ || Object.getPrototypeOf(MeuBotaoEnviar)).call(this, props));

    _this3.state = { clicked: false };
    return _this3;
  }

  _createClass(MeuBotaoEnviar, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      if (this.state.clicked) {
        return "Enviado!"; //redesenha o componente se o botão for clicado
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            _this4.setState({ clicked: true });
            console.log('clicou em enviar');
          } },
        'Enviar'
      );
    }
  }]);

  return MeuBotaoEnviar;
}(React.Component);

var domContainer = document.querySelector('#react');
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(MeuBotaoComprar, null),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(MeuBotaoEnviar, null)
), domContainer);