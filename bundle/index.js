"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lkCollection = require("lk-collection");

var _lkCollection2 = _interopRequireDefault(_lkCollection);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _bunyan = require("bunyan");

var _bunyan2 = _interopRequireDefault(_bunyan);

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

_dotenv2["default"].load();
var logger = _bunyan2["default"].createLogger({ name: "ReadingsApi" });
(0, _lkCollection.setLogger)(logger);

var Readings = new _lkCollection2["default"]({
    name: "readings",
    mongodbUrl: process.env.MONGODB_URL,
    schema: _schema2["default"],
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

var handler = Readings.apiGatewayToKinesis;
exports.handler = handler;