import readlineSync from 'readline-sync';

const welcomeMsg = console.log('Welcome to the Brain Games!\n');
const name = readlineSync.question('May I have your name?\n');
const hello = console.log('Hi, ${name}!\n');

