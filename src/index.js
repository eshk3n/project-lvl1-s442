import readlineSync from 'readline-sync';

export default game = () => {
  const welcomeMsg = console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?\n');
  console.log('Hi, ${name}!\n');
}

