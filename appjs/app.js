'use strict';
let countScore = 0;
yesOrNoQuestions();
guessWhatGame();
multipleCorrectAnswer();


function yesOrNoQuestions() {

  let userName = prompt('Hello sir, please can you enter your name ');

  document.write('you are soo welcome mister  ' + userName);
  alert('please answer just  y/n or yes/no');
  let question1 = prompt('Do I  like Games?');
  if (question1.toLowerCase() === 'yes' || question1.toUpperCase() === 'Y') {
    alert('your answer is wrong');
    

  }
  else if (question1.toLowerCase() === 'no' || question1.toUpperCase() === 'N') {
    alert('your answer is correct ');
    
    countScore++;
  }
  let question2 = prompt('Do I  play games more than tow games ?');
  if (question2.toLowerCase() === 'yes' || question2.toUpperCase() === 'Y') {
    alert('your answer is wrong');
    

  }
  else if (question2.toLowerCase() === 'no' || question2.toUpperCase() === 'N') {
    alert('your answer is correct ');
    
    countScore++;
  }

  let question3 = prompt('Do I like a smart Game?');
  if (question3.toLowerCase() === 'yes' || question3.toUpperCase() === 'Y') {
    alert('your answer is correct');
    
    countScore++;
  }
  else if (question3.toLowerCase() === 'no' || question3.toUpperCase() === 'N') {
    alert('your answer is wrong ');
    

  }
  let question4 = prompt('Do I living in jordan ?');
  if (question4.toLowerCase() === 'yes' || question4.toUpperCase() === 'Y') {
    alert('your answer is correct');
    
    countScore++;
  }
  else if (question4.toLowerCase() === 'no' || question4.toUpperCase() === 'N') {
    alert('your answer is wrong ');
    

  }

  let question5 = prompt('Do I like pizza');
  if (question5.toLowerCase() === 'yes' || question5.toUpperCase() === 'Y') {
    alert('your answer is correct, who dosent! hhhh');
    
    countScore++;
  }
  else if (question5.toLowerCase() === 'no' || question5.toUpperCase() === 'N') {
    alert('your answer is wrong ');
    alert('yes/no questions are done ');
    

  }
}
function guessWhatGame() {
  let question6 = Number(prompt('NOw you should guess the right number of my age and you have 4 attempts my age is :'));

  let numberOfAttembt = 4;

  while (numberOfAttembt > 0) {
    if (question6 < 15 && question6 >= 1) {
      alert(' oops too low  you still have ' + numberOfAttembt + ' attempts');
      question6 = Number(prompt('guess again'));
      numberOfAttembt--;
      continue;
    }
    else if (question6 >= 15 && question6 <= 24) {
      alert('your guess is low you still have ' + numberOfAttembt + ' attempts');
      question6 = Number(prompt('guess again'));
      numberOfAttembt--;
      continue;
    }

    else if (question6 >= 26 && question6 < 30) {
      alert('your guess is high you still have ' + numberOfAttembt + ' attempts');
      question6 = Number(prompt('guess again'));
      numberOfAttembt--;
      continue;
    }

    else if (question6 >= 30) {
      alert('your guess is too high you still have ' + numberOfAttembt + ' attempts');
      Number(prompt('guess again'));
      numberOfAttembt--;
      continue;
    }

    else if (question6 === 25) {
      alert('wow, that exactly right');
      countScore++;
      break;
    }





  }

  alert('the correct answer is: 25');

}



function multipleCorrectAnswer() {

  let question7 = prompt('write one of telecommunications companies in jordan  ');

  let numberOfAttembt = 5;
  for (let i = 0; i < 6; i++) {

    switch (question7) {

    case 'umniah':
      alert('your answer is correct');

      countScore++;
      break;
    case 'zain':
      alert('your answer is correct');

      countScore++;
      break;
    case 'orange':
      alert('your answer is correct');

      countScore++;
      break;
    case 'mada':
      alert('your answer is correct');

      countScore++;
      break;
    default:

      alert('your answer is wrong, and there still a ' + numberOfAttembt + '  times to try');
      numberOfAttembt--;
      question7 = prompt('write one of telecommunications companies in jordan  ');
      continue;
    }

  }
  alert('the correct answer is:  umniah, zain, orange, mada ');


}




alert('your final  score is:  ' + countScore);
























