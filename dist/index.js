"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = game = () => {
  const welcomeMsg = console.log('Welcome to the Brain Games!\n');

  const name = _readlineSync.default.question('May I have your name?\n');

  console.log('Hi, ${name}!\n');
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnYW1lIiwid2VsY29tZU1zZyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlQSxJQUFJLEdBQUcsTUFBTTtBQUMxQixRQUFNQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaLENBQW5COztBQUNBLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IseUJBQXRCLENBQWI7O0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHdlbGNvbWVNc2cgPSBjb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhXFxuJyk7XG4gIGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lP1xcbicpO1xuICBjb25zb2xlLmxvZygnSGksICR7bmFtZX0hXFxuJyk7XG59XG5cbiJdfQ==