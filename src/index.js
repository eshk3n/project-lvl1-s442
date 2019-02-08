import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};
export default game;
