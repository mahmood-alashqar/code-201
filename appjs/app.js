'use strict';

let userName = prompt('Hello sir, please can you enter your name ');
document.write('you are soo welcome mister  ' + userName);
alert('please answer just  y/n or yes/no');
let loveGame = prompt('Do you like Games?');
let numberGame = prompt('do you play games more than tow games ?');
let typeOFGame = prompt('Do you like a smart Game?');
let userLocation = prompt('are you living in jordan ?');



function checkAnswer(temp ) {

  if (temp.toLowerCase() === 'yes' || temp.toUpperCase() === 'Y') {
    alert('your answer is yes' );
    console.log(temp);
  }
  else if (temp.toLowerCase() === 'no' || temp.toUpperCase === 'N') {
    alert('your answer is no ' );
    console.log(temp);
  }
}

checkAnswer(loveGame);
checkAnswer(numberGame);
checkAnswer(typeOFGame);
checkAnswer(userLocation);




