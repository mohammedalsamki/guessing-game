'use strict';
let userwelcom = prompt ('what is your name :)');
alert('I am Glad that you are here'+ userwelcom);

let knowme = prompt ('Do we know each other :) )' , 'your answer should be in lowercase');
switch(knowme.toLowerCase()) {
    case 'yes':
      alert ('Glad to hear about you :) ');
     // console.log(knowme);
      break;
    case 'no':
      alert('I whish that we can know each other ');
     // console.log(knowme);
      break;
    default:
      alert('You didnt answer :(');
      //console.log(knowme);
  }

  let like = prompt ('Do you like programing :)' , 'your answer should be in lowercase' );
switch(like.toLowerCase()) {
    case 'yes':
      alert ('So you are one of the team  :)');
     // console.log(like);
      break;
    case 'no':
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
      case 'YES':
        alert ('I will be so happy to gide you  :)');
       // console.log(learn);
        break;
      case 'NO':
        alert('I think you must re thing of it :) ');
       // console.log(learn);
        break;
      default:
        alert('You didnt answer :(');
        //console.log(learn);
    }
    let thing = prompt ('Do you thing that i made a good disegion to start this way  :)', 'your answer should be in UpperCase');
    switch(thing.toUpperCase()) {
        case 'YES':
          alert ('Thanks for yor encouragement  :)');
         // console.log(thing);
          break;
        case 'NO':
          alert('I will be so happy to know why  :) ');
         // console.log(thing);
          break;
        default:
          alert('You didnt answer :(');
          //console.log(thing);
      }
      let last = prompt ('Do you like to stay in contact :)', 'your answer should be in UpperCase');
    switch(last.toUpperCase()) {
        case 'Yes':
          alert ('Thanks i am so happy to hear that :)');
         // console.log(last);
          break;
        case 'NO':
          alert('I respict your choice   :) ');
         // console.log(last);
          break;
        default:
          alert('You didnt answer :(');
          //console.log(last);
      }

      alert('Thanks for your answers :) '+ userwelcom);      
