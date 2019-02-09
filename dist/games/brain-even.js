"use strict";

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const even = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const q = Math.floor(Math.random() * 100 + 1);
  console.log(`Question: ${q}\n`);

  const answer = _.default.question('Your answer: ');

  const check = answer => {
    if (answer === 'yes' && q % 2 === 0) {
      return console.log('Correct!\n');
    }

    if (answer === 'no' && q % 2 !== 0) {
      return console.log('Correct\n');
    }

    return console.log(`"${answer}" is wrong answer.\n Let's try again, ${name}!`);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1ldmVuLmpzIl0sIm5hbWVzIjpbImV2ZW4iLCJjb25zb2xlIiwibG9nIiwicSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFuc3dlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY2hlY2siLCJuYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNEQUFaO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLEdBQXdCLENBQW5DLENBQVY7QUFDQUwsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUMsQ0FBRSxJQUEzQjs7QUFDQSxRQUFNSSxNQUFNLEdBQUdDLFVBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFNQyxLQUFLLEdBQUlILE1BQUQsSUFBWTtBQUN4QixRQUFJQSxNQUFNLEtBQUssS0FBWCxJQUFvQkosQ0FBQyxHQUFHLENBQUosS0FBVSxDQUFsQyxFQUFxQztBQUNuQyxhQUFPRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQVA7QUFDRDs7QUFBQyxRQUFJSyxNQUFNLEtBQUssSUFBWCxJQUFtQkosQ0FBQyxHQUFHLENBQUosS0FBVSxDQUFqQyxFQUFvQztBQUNwQyxhQUFPRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLENBQVA7QUFDRDs7QUFBQyxXQUFPRCxPQUFPLENBQUNDLEdBQVIsQ0FBYSxJQUFHSyxNQUFPLHlDQUF3Q0ksSUFBSyxHQUFwRSxDQUFQO0FBQ0gsR0FORDtBQU9ELENBWkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJy4uJztcblxuY29uc3QgZXZlbiA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0Fuc3dlciBcInllc1wiIGlmIG51bWJlciBldmVuIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLlxcbicpO1xuICBjb25zdCBxID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxKTtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3F9XFxuYCk7XG4gIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICBjb25zdCBjaGVjayA9IChhbnN3ZXIpID0+IHtcbiAgICBpZiAoYW5zd2VyID09PSAneWVzJyAmJiBxICUgMiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdDb3JyZWN0IVxcbicpO1xuICAgIH0gaWYgKGFuc3dlciA9PT0gJ25vJyAmJiBxICUgMiAhPT0gMCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdDb3JyZWN0XFxuJyk7XG4gICAgfSByZXR1cm4gY29uc29sZS5sb2coYFwiJHthbnN3ZXJ9XCIgaXMgd3JvbmcgYW5zd2VyLlxcbiBMZXQncyB0cnkgYWdhaW4sICR7bmFtZX0hYCk7XG4gIH07XG59O1xuIl19