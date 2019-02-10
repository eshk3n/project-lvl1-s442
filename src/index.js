import readlineSync from 'readline-sync';

const num = Math.floor((Math.random() * 100) + 1);
const correctAnswer = () => ((num % 2 === 0) ? 'yes' : 'no');
const name = readlineSync.question('May I have your name?\n');

export const even = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  let iter = 1;
  while (iter <= 3) {
    //    const num = Math.floor((Math.random() * 100) + 1);
    //    const correctAnswer = () => ((num % 2 === 0) ? 'yes' : 'no');
    console.log(`Question: ${num}\n`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!\n');
      iter += 1;
    } else {
      console.log(`"${answer}" is wrong answer. Correct asnwer was ${correctAnswer}\n Let's try again, ${name}!`);
      iter += 1;
    }
    console.log('Congratulations!\n');
  }
};

export const game = () => {
  console.log('Welcome to the Brain Games!\n');
  //  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};
