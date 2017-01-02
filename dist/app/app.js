(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helloWorld = require('./hello-world');

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _reactBabylonjs = require('./react-babylonjs');

var _reactBabylonjs2 = _interopRequireDefault(_reactBabylonjs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require('./babylon.min.js');

//just testing not be place here
document.body.style.overflow = 'hidden';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.margin = 0;
document.body.style.padding = 0;

_reactDom2.default.render(_react2.default.createElement(_reactBabylonjs2.default, null), document.querySelector('.root'));

},{"./hello-world":2,"./react-babylonjs":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = function (_React$Component) {
    _inherits(HelloWorld, _React$Component);

    function HelloWorld() {
        _classCallCheck(this, HelloWorld);

        return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
    }

    _createClass(HelloWorld, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'Hello from ',
                this.props.phrase,
                '!'
            );
        }
    }]);

    return HelloWorld;
}(_react2.default.Component);

exports.default = HelloWorld;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./babylon.min.js');

var Reactbabylonjs = function (_React$Component) {
    _inherits(Reactbabylonjs, _React$Component);

    function Reactbabylonjs(props) {
        _classCallCheck(this, Reactbabylonjs);

        return _possibleConstructorReturn(this, (Reactbabylonjs.__proto__ || Object.getPrototypeOf(Reactbabylonjs)).call(this, props));
    }

    //https://facebook.github.io/react/docs/state-and-lifecycle.html
    //The componentDidMount() hook runs after the component output has been rendered to the DOM.


    _createClass(Reactbabylonjs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.init();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //clearInterval(this.timerID);
        }
    }, {
        key: 'init',
        value: function init() {
            console.log(this);
            // get the canvas DOM element
            var canvas = document.getElementById('renderCanvas');
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style['touch-action'] = 'none';

            //console.log(BABYLON);
            // load the 3D engine
            var engine = new BABYLON.Engine(canvas, true);

            // createScene function that creates and return the scene
            var createScene = function createScene() {
                // create a basic BJS Scene object
                var scene = new BABYLON.Scene(engine);

                // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

                // target the camera to scene origin
                camera.setTarget(BABYLON.Vector3.Zero());

                // attach the camera to the canvas
                camera.attachControl(canvas, false);

                // create a basic light, aiming 0,1,0 - meaning, to the sky
                var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

                // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

                // move the sphere upward 1/2 of its height
                sphere.position.y = 1;

                // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
                var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

                // return the created scene
                return scene;
            };

            // call the createScene function
            var scene = createScene();

            // run the render loop
            engine.runRenderLoop(function () {
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                engine.resize();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('canvas', { id: 'renderCanvas' });
        }
    }]);

    return Reactbabylonjs;
}(_react2.default.Component);

exports.default = Reactbabylonjs;

},{"./babylon.min.js":4,"react":"react"}],4:[function(require,module,exports){

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qc3giLCJhcHBcXGhlbGxvLXdvcmxkLmpzeCIsImFwcFxccmVhY3QtYmFieWxvbmpzLmpzeCIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTs7QUFFQTtBQUNBLFNBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsUUFBcEIsR0FBK0IsUUFBL0I7QUFDQSxTQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQTRCLE1BQTVCO0FBQ0EsU0FBUyxJQUFULENBQWMsS0FBZCxDQUFvQixNQUFwQixHQUE2QixNQUE3QjtBQUNBLFNBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsTUFBcEIsR0FBNkIsQ0FBN0I7QUFDQSxTQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLENBQTlCOztBQUVBLG1CQUFTLE1BQVQsQ0FDSSw2REFESixFQUVJLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUZKOzs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7Ozs7SUFFTSxVOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQWdCLHFCQUFLLEtBQUwsQ0FBVyxNQUEzQjtBQUFBO0FBQUEsYUFBUDtBQUNIOzs7O0VBSG9CLGdCQUFNLFM7O2tCQU1oQixVOzs7Ozs7Ozs7OztBQ1JmOzs7Ozs7Ozs7Ozs7QUFFQSxRQUFRLGtCQUFSOztJQUVNLGM7OztBQUVGLDRCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrSEFDVCxLQURTO0FBRWxCOztBQUVEO0FBQ0E7Ozs7OzRDQUNtQjtBQUNmLGlCQUFLLElBQUw7QUFDSDs7OytDQUVzQjtBQUNuQjtBQUNIOzs7K0JBRUs7QUFDRixvQkFBUSxHQUFSLENBQVksSUFBWjtBQUNBO0FBQ0EsZ0JBQUksU0FBUyxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBYjtBQUNBLG1CQUFPLEtBQVAsQ0FBYSxLQUFiLEdBQXFCLE1BQXJCO0FBQ0EsbUJBQU8sS0FBUCxDQUFhLE1BQWIsR0FBc0IsTUFBdEI7QUFDQSxtQkFBTyxLQUFQLENBQWEsY0FBYixJQUErQixNQUEvQjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQUksU0FBUyxJQUFJLFFBQVEsTUFBWixDQUFtQixNQUFuQixFQUEyQixJQUEzQixDQUFiOztBQUVBO0FBQ0EsZ0JBQUksY0FBYyxTQUFkLFdBQWMsR0FBVTtBQUN4QjtBQUNBLG9CQUFJLFFBQVEsSUFBSSxRQUFRLEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsSUFBSSxRQUFRLFVBQVosQ0FBdUIsU0FBdkIsRUFBa0MsSUFBSSxRQUFRLE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBeUIsQ0FBQyxFQUExQixDQUFsQyxFQUFpRSxLQUFqRSxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sU0FBUCxDQUFpQixRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBakI7O0FBRUE7QUFDQSx1QkFBTyxhQUFQLENBQXFCLE1BQXJCLEVBQTZCLEtBQTdCOztBQUVBO0FBQ0Esb0JBQUksUUFBUSxJQUFJLFFBQVEsZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsSUFBSSxRQUFRLE9BQVosQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBdkMsRUFBbUUsS0FBbkUsQ0FBWjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsUUFBUSxJQUFSLENBQWEsWUFBYixDQUEwQixTQUExQixFQUFxQyxFQUFyQyxFQUF5QyxDQUF6QyxFQUE0QyxLQUE1QyxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sUUFBUCxDQUFnQixDQUFoQixHQUFvQixDQUFwQjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsUUFBUSxJQUFSLENBQWEsWUFBYixDQUEwQixTQUExQixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxFQUE4QyxLQUE5QyxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sS0FBUDtBQUNILGFBM0JEOztBQTZCQTtBQUNBLGdCQUFJLFFBQVEsYUFBWjs7QUFFQTtBQUNBLG1CQUFPLGFBQVAsQ0FBcUIsWUFBVTtBQUMzQixzQkFBTSxNQUFOO0FBQ0gsYUFGRDs7QUFJQTtBQUNBLG1CQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVU7QUFDeEMsdUJBQU8sTUFBUDtBQUNILGFBRkQ7QUFJSDs7O2lDQUVRO0FBQ0wsbUJBQU8sMENBQVEsSUFBRyxjQUFYLEdBQVA7QUFDSDs7OztFQTNFd0IsZ0JBQU0sUzs7a0JBOEVwQixjOzs7QUNsRmYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhlbGxvV29ybGQgZnJvbSAnLi9oZWxsby13b3JsZCc7XHJcbmltcG9ydCBSZWFjdGJhYnlsb25qcyBmcm9tICcuL3JlYWN0LWJhYnlsb25qcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4vL3JlcXVpcmUoJy4vYmFieWxvbi5taW4uanMnKTtcclxuXHJcbi8vanVzdCB0ZXN0aW5nIG5vdCBiZSBwbGFjZSBoZXJlXHJcbmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gMDtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxSZWFjdGJhYnlsb25qcy8+LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT5IZWxsbyBmcm9tIHt0aGlzLnByb3BzLnBocmFzZX0hPC9oMT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5yZXF1aXJlKCcuL2JhYnlsb24ubWluLmpzJyk7XHJcblxyXG5jbGFzcyBSZWFjdGJhYnlsb25qcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9odHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3N0YXRlLWFuZC1saWZlY3ljbGUuaHRtbFxyXG4gICAgLy9UaGUgY29tcG9uZW50RGlkTW91bnQoKSBob29rIHJ1bnMgYWZ0ZXIgdGhlIGNvbXBvbmVudCBvdXRwdXQgaGFzIGJlZW4gcmVuZGVyZWQgdG8gdGhlIERPTS5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgLy9jbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIC8vIGdldCB0aGUgY2FudmFzIERPTSBlbGVtZW50XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJDYW52YXMnKTtcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBjYW52YXMuc3R5bGVbJ3RvdWNoLWFjdGlvbiddID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKEJBQllMT04pO1xyXG4gICAgICAgIC8vIGxvYWQgdGhlIDNEIGVuZ2luZVxyXG4gICAgICAgIHZhciBlbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUoY2FudmFzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlU2NlbmUgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuZCByZXR1cm4gdGhlIHNjZW5lXHJcbiAgICAgICAgdmFyIGNyZWF0ZVNjZW5lID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYmFzaWMgQkpTIFNjZW5lIG9iamVjdFxyXG4gICAgICAgICAgICB2YXIgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgRnJlZUNhbWVyYSwgYW5kIHNldCBpdHMgcG9zaXRpb24gdG8gKHg6MCwgeTo1LCB6Oi0xMClcclxuICAgICAgICAgICAgdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoJ2NhbWVyYTEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsLTEwKSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGFyZ2V0IHRoZSBjYW1lcmEgdG8gc2NlbmUgb3JpZ2luXHJcbiAgICAgICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBhdHRhY2ggdGhlIGNhbWVyYSB0byB0aGUgY2FudmFzXHJcbiAgICAgICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYmFzaWMgbGlnaHQsIGFpbWluZyAwLDEsMCAtIG1lYW5pbmcsIHRvIHRoZSBza3lcclxuICAgICAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodCgnbGlnaHQxJywgbmV3IEJBQllMT04uVmVjdG9yMygwLDEsMCksIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJ1aWx0LWluIFwic3BoZXJlXCIgc2hhcGU7IGl0cyBjb25zdHJ1Y3RvciB0YWtlcyA1IHBhcmFtczogbmFtZSwgd2lkdGgsIGRlcHRoLCBzdWJkaXZpc2lvbnMsIHNjZW5lXHJcbiAgICAgICAgICAgIHZhciBzcGhlcmUgPSBCQUJZTE9OLk1lc2guQ3JlYXRlU3BoZXJlKCdzcGhlcmUxJywgMTYsIDIsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdGhlIHNwaGVyZSB1cHdhcmQgMS8yIG9mIGl0cyBoZWlnaHRcclxuICAgICAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYnVpbHQtaW4gXCJncm91bmRcIiBzaGFwZTsgaXRzIGNvbnN0cnVjdG9yIHRha2VzIHRoZSBzYW1lIDUgcGFyYW1zIGFzIHRoZSBzcGhlcmUncyBvbmVcclxuICAgICAgICAgICAgdmFyIGdyb3VuZCA9IEJBQllMT04uTWVzaC5DcmVhdGVHcm91bmQoJ2dyb3VuZDEnLCA2LCA2LCAyLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIGNyZWF0ZWQgc2NlbmVcclxuICAgICAgICAgICAgcmV0dXJuIHNjZW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgY3JlYXRlU2NlbmUgZnVuY3Rpb25cclxuICAgICAgICB2YXIgc2NlbmUgPSBjcmVhdGVTY2VuZSgpO1xyXG5cclxuICAgICAgICAvLyBydW4gdGhlIHJlbmRlciBsb29wXHJcbiAgICAgICAgZW5naW5lLnJ1blJlbmRlckxvb3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoZSBjYW52YXMvd2luZG93IHJlc2l6ZSBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGVuZ2luZS5yZXNpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Y2FudmFzIGlkPVwicmVuZGVyQ2FudmFzXCIgPjwvY2FudmFzPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RiYWJ5bG9uanM7XHJcbiIsIiJdfQ==