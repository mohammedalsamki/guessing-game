'use strict';
let userwelcom = prompt ('what is your name :)');
alert('I am Glad that you are here'+ userwelcom);

let knowme = prompt ('Do we know each other :) )' , 'your answer should be in lowercase');
switch(knowme.toLowerCase()) {
    case 'yes' || 'y ':
      alert ('Glad to hear about you :) ');
     // console.log(knowme);
      break;
    case 'no' || 'n':
      alert('I whish that we can know each other ');
     // console.log(knowme);
      break;
    default:
      alert('You didnt answer :(');
      //console.log(knowme);
  }

  let like = prompt ('Do you like programing :)' , 'your answer should be in lowercase' );
switch(like.toLowerCase()) {
    case 'yes' || 'y':
      alert ('So you are one of the team  :)');
     // console.log(like);
      break;
    case 'no' || 'n':
      alert('I think you must re thing of it :) ');
     // console.log(like);
      break;
    default:
      alert('You didnt answer :(');
      //console.log(like);
  }
  let learn = prompt ('Do you like to learn programing and coding  :)', 'your answer should be in UpperCase'
);
  switch(learn.toUpperCase()) {
      case 'YES' || 'Y':
        alert ('I will be so happy to gide you  :)');
       // console.log(learn);
        break;
      case 'NO' || 'N':
        alert('I think you must re thing of it :) ');
       // console.log(learn);
        break;
      default:
        alert('You didnt answer :(');
        //console.log(learn);
    }
    let thing = prompt ('Do you thing that i made a good disegion to start this way  :)', 'your answer should be in UpperCase');
    switch(thing.toUpperCase()) {
        case 'YES' || 'Y':
          alert ('Thanks for yor encouragement  :)');
         // console.log(thing);
          break;
        case 'NO' || 'N':
          alert('I will be so happy to know why  :) ');
         // console.log(thing);
          break;
        default:
          alert('You didnt answer :(');
          //console.log(thing);
      }
      let last = prompt ('Do you like to stay in contact :)', 'your answer should be in UpperCase');
    switch(last.toUpperCase()) {
        case 'Yes' || 'Y':
          alert ('Thanks i am so happy to hear that :)');
         // console.log(last);
          break;
        case 'NO' || 'N':
          alert('I respict your choice   :) ');
         // console.log(last);
          break;
        default:
          alert('You didnt answer :(');
          //console.log(last);
      }
      // Guess Question 6
function guessFavNumber() {
  var counter = 1;
  if (counter === 5) {
      alert('Sorry you run out of guesses');
  }
  while (counter < 5 && number !==33) {
      var number = parseInt(prompt('Guess my favorite number'));
      if (number > 33) {
          alert('You guessed too high! Guess again');
          counter++;
      } else if (number < 33) {
          alert('You guessed too low! Guess again');
          counter++;
      }
  }
  if (number === 33) {
      alert('That is correct! My favorite number is 33!');
      score++;
      counter = 5;
  }
}

guessFavNumber();


// Guess Question 7

function questionSeven() {
  var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

  for (var i = 0; i < 6; i++) {
      var userAnsw = prompt('Can you guess my favorite fruit?');
      var guess = userAnsw.toLowerCase();

      for (var j = 0; j < userFavFruit.length; j++){
          if (guess === userFavFruit[j]) {
              alert('Congrats you got it right!!!');
              score++;
              i = 6;
              break;
          }
      }
      if (i !==6){
          alert('Sorry wrong answer, try again');
      }
  }
}

questionSeven();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');
