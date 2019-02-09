import readlineSync from 'readline-sync';

const checkAnswer = (answer) => {
  (asnwer === 'yes');
};

const even = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  let iter = 1;
  while (iter <= 3) {
    const q = Math.floor((Math.random() * 100) + 1);
    console.log(`Question: ${q}\n`);
    const answer = readlineSync.question('Your answer: ');
    const check = (answer) => {
      if (answer === 'yes' && q % 2 === 0) console.log('Correct!\n');
      else if (answer === 'no' && q % 2 !== 0) console.log('Correct\n');
      else console.log(`"${answer}" is wrong answer.\n Let's try again, ${name}!`);
    };
    iter += 1;
  }
  console.log('Congratulations!\n');
};

const game = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};
export default game;
