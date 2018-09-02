'use strict';

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./controllers/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static('public'));
app.use((0, _morgan2.default)('tiny'));

app.get('/', _routes2.default.homePage);
app.get('/syncvideo', _routes2.default.sync);

var port = process.env.port || 3000;

app.listen(port, function () {
  console.log('Now listening on port ', port);
});