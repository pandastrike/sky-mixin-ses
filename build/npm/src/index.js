"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _pandaSkyMixin = require("panda-sky-mixin");

var _pandaSkyMixin2 = _interopRequireDefault(_pandaSkyMixin);

var _fairmont = require("fairmont");

var _pandaSerialize = require("panda-serialize");

var _policy = require("./policy");

var _policy2 = _interopRequireDefault(_policy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mixin;

mixin = function () {
  return new _pandaSkyMixin2.default({
    name: "ses",
    getPolicyStatements: _policy2.default
  });
}();

exports.default = mixin;