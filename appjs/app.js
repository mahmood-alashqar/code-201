'use strict';

let userName = prompt('Hello sir, please can you enter your name ');
let countScore = 0;
document.write('you are soo welcome mister  ' + userName);
alert('please answer just  y/n or yes/no');
let question1 = prompt('Do I  like Games?');
if (question1.toLowerCase() === 'yes' || question1.toUpperCase() === 'Y') {
  alert('your answer is wrong');
  console.log(question1);

}
else if (question1.toLowerCase() === 'no' || question1.toUpperCase() === 'N') {
  alert('your answer is correct ');
  console.log(question1);
  countScore++;
}
let question2 = prompt('Do I  play games more than tow games ?');
if (question2.toLowerCase() === 'yes' || question2.toUpperCase() === 'Y') {
  alert('your answer is wrong');
  console.log(question2);

}
else if (question2.toLowerCase() === 'no' || question2.toUpperCase() === 'N') {
  alert('your answer is correct ');
  console.log(question2);
  countScore++;
}

let question3 = prompt('Do I like a smart Game?');
if (question3.toLowerCase() === 'yes' || question3.toUpperCase() === 'Y') {
  alert('your answer is correct');
  console.log(question3);
  countScore++;
}
else if (question3.toLowerCase() === 'no' || question3.toUpperCase() === 'N') {
  alert('your answer is wrong ');
  console.log(question3);

}
let question4 = prompt('Do I living in jordan ?');
if (question4.toLowerCase() === 'yes' || question4.toUpperCase() === 'Y') {
  alert('your answer is correct');
  console.log(question4);
  countScore++;
}
else if (question4.toLowerCase() === 'no' || question4.toUpperCase() === 'N') {
  alert('your answer is wrong ');
  console.log(question4);

}

let question5 = prompt('Do I like pizza');
if (question5.toLowerCase() === 'yes' || question5.toUpperCase() === 'Y') {
  alert('your answer is correct, who dosent! hhhh');
  console.log(question5);
  countScore++;
}
else if (question5.toLowerCase() === 'no' || question5.toUpperCase() === 'N') {
  alert('your answer is wrong ');
  alert('yes/no questions are done ');
  console.log(question5);

}

let question6 = prompt('NOw you should guess the right number of my age and you have 4 attempts my age is :');

let z = 4;
while (z > 0) {
  if (question6 < 15 && question6 >= 1) {
    alert(' oops too low  you still have ' + z + ' ateempts');
    question6 = prompt('guess again');
    z--;
    continue;
  }
  else if (question6 >= 15 && question6 <= 24) {
    alert('your guess is low you still have ' + z + ' ateempts');
    question6 = prompt('guess again');
    z--;
    continue;
  }

  else if (question6 >= 26 && question6 < 30) {
    alert('your guess is high you still have ' + z + ' ateempts');
    question6 = prompt('guess again');
    z--;
    continue;
  }

  else if (question6 >= 30) {
    alert('your guess is too high you still have ' + z + ' ateempts');
    question6 = prompt('guess again');
    z--;
    continue;
  }

  else if (question6 == 25) {
    alert('wow, that exactly right');
    countScore++;
    break;
  }





}

alert('the correct answer is: 25');



















let question7 = prompt('write one of telecommunications companies in jordan  ');

let teleCom = ['umniah', 'zain', 'orange', 'mada'];
for (let i = 0; i < 6; i++) {
  if (question7.toLowerCase() === teleCom[i]) {
    alert('your answer is correct');

    countScore++;
    break;
  }
  else {
    alert('your answer is wrong, and there still a ' + i + '  times to try');

  }


}
alert('the correct answer is:  umniah, zain, orange, mada ');


































alert('your final  score is:  ' + countScore);













