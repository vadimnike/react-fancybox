'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Fancybox = (function (_React$Component) {
	_inherits(Fancybox, _React$Component);

	function Fancybox() {
		_classCallCheck(this, Fancybox);

		_get(Object.getPrototypeOf(Fancybox.prototype), 'constructor', this).call(this);
		this.state = {
			showBox: false
		};
	}

	_createClass(Fancybox, [{
		key: 'showBox',
		value: function showBox(event) {
			event.preventDefault();
			this.setState({
				showBox: true
			});
		}
	}, {
		key: 'onBoxClick',
		value: function onBoxClick(event) {
			event.preventDefault();
			if (event.target != this.refs.imageInBox) {
				this.setState({
					showBox: false
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var box = '';
			if (this.state.showBox) {
				box = _react2['default'].createElement(
					'div',
					{ onClick: this.onBoxClick.bind(this), ref: 'box', className: this.props.boxClassName },
					_react2['default'].createElement('img', { ref: 'imageInBox', src: this.props.imageUrl }),
					_react2['default'].createElement(
						'div',
						null,
						this.props.caption
					)
				);
			}
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement('img', { onClick: this.showBox.bind(this), src: this.props.imageUrl, className: this.props.imageClassName }),
				box
			);
		}
	}]);

	return Fancybox;
})(_react2['default'].Component);

Fancybox.propTypes = {
	boxClassName: _react2['default'].PropTypes.string,
	caption: _react2['default'].PropTypes.string,
	imageClassName: _react2['default'].PropTypes.string,
	imageUrl: _react2['default'].PropTypes.string
};

Fancybox.defaultProps = {
	caption: '',
	imageClassName: 'fancybox-img',
	imageUrl: '',
	boxClassName: 'fancybox'
};

exports['default'] = Fancybox;
module.exports = exports['default'];