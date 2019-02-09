"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const game = () => {
  console.log('Welcome to the Brain Games!\n');

  const name = _readlineSync.default.question('May I have your name?\n');

  console.log(`Hello, ${name}!`);
};

var _default = game;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnYW1lIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaOztBQUNBLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IseUJBQXRCLENBQWI7O0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNDLElBQUssR0FBM0I7QUFDRCxDQUpEOztlQUtlSCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzIVxcbicpO1xuICBjb25zdCBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT9cXG4nKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IWApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iXX0=