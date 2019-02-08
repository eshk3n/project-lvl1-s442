import readlineSync from 'readline-sync';

export default const game = () => 
  {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?\n');
  const sayHi = console.log('Hi, ${name}!\n');
};
