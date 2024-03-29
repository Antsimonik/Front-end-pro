var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { getRandomInt } from "./script.js";

export var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      list: _this.props.list,
      listIndex: Object.keys(_this.props.list),
      styleItem: {},
      borderWidth: 0
    };


    var activateItems = setInterval(function () {
      var randomIndex = getRandomInt(0, _this.state.listIndex.length);
      var randomItem = _this.state.listIndex[randomIndex];
      console.log(randomItem);

      console.log(_this.state.list[randomItem], _this.state.listIndex);

      _this.state.list[randomItem].active = true;
      _this.state.listIndex.splice(randomIndex, 1);

      if (_this.state.listIndex.length === Math.floor(_this.state.list.length / 2)) {
        _this.state.borderWidth = "10px";
      }

      if (!_this.state.listIndex.length) {
        clearInterval(activateItems);
        _this.state.borderWidth = "20px";
      }
      _this.setState({});
    }, 2000);

    console.log(_this.state);
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "table",
        { style: { borderWidth: this.state.borderWidth } },
        React.createElement(
          "tbody",
          null,
          this.state.list.map(function (item, index) {
            return React.createElement(
              "tr",
              {
                style: item.active && { color: "green", fontWeight: "bold" },
                key: index
              },
              React.createElement(
                "td",
                null,
                item.type
              ),
              React.createElement(
                "td",
                null,
                item.icon
              )
            );
          })
        )
      );
    }
  }]);

  return Table;
}(React.Component);