import readlineSync from 'readline-sync';

const checkAnswer = (answer) => {
  if (asnwer ===  correct) return true;
  return false;
};

const even = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  let iter = 1;
  while (iter <= 3) {
    const q = Math.floor((Math.random() * 100) + 1);
    console.log(`Question: ${q}\n`);
    const answer = readlineSync.question('Your answer: ');
    const check = (answer) => {
      if (checkAnswer) {
        console.log('Correct!\n');
        iter += 1;
      }
      else {
        console.log(`"${answer}" is wrong answer.
        Correct asnwer was ${correct}
        \n Let's try again, ${name}!`);
        iter += 1;
      }
    }
  }
  console.log('Congratulations!\n');
};

const game = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};
export default game;
